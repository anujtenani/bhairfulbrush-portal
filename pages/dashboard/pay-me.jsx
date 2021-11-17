import React, {useEffect, useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import {FiArrowDownCircle, FiHelpCircle} from "react-icons/fi";
import {updateProfile, usePayouts, useProfile} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import RenderDateAndTime from "../../components/general/RenderDateAndTime";
import DefaultCurrencyRender from "../../components/general/DefaultCurrencyRender";
import Button from '../../components/general/Button'
import PageBanner from "./components/general/PageBanner";
function PayMe(props) {
    return (
        <DashboardContainer title={"Pay Me"}>
           <div className="paymenbanner"> <PageBanner bgSrc={"/dashboard/pay_me.png"} height={500} title={"PAY ME"} /></div>
            <PaypalEmailAddressUpdater />
                <section className="paymepart">
                    <div className="container">
                        <PayoutsTable />
                    </div>
                </section> 
            <DashboardFooter />
        </DashboardContainer>
    ); 
}

function PayoutsTable(){
    const {data, error, isLoading} = usePayouts();
    if(isLoading){
        return <Skeleton count={20}/>
    }
    const items = data.data;
    
    return <> <div className="tablepayme"> <div className="tablemore"> <table className="table maintable">
        <thead>
            <tr>
                <th>Date</th>
                <th className={"text-center"}>Amount</th>
                <th className={"text-right"}>Invoice</th>
            </tr>
        </thead>
        <tbody>
            {
                items.length === 0 ? <tr><td colSpan={4} className={"text-center"}>No payouts</td></tr> :
                    <>
                        {
                            items.map((item)=>{
                                return <tr key={String(item.payout_id)}>
                                    <td>
                                        <RenderDateAndTime value={item.payout_date} />
                                    </td>
                                    <td className={"text-center"}>
                                        <DefaultCurrencyRender value={item.amount} />
                                    </td>
                                    <td className={"text-right"}>
                                        <a href={`https://api-server-1.goaffpro.com/partner/payments/download/${item.downloadToken}`}>
                                            <FiArrowDownCircle style={{fontSize:20}}/>
                                        </a>
                                    </td>
                                </tr>
                            })
                        }
                    </>
            }
        </tbody>
    </table></div></div>
        <p className="showingenteries"> Showing {items.length} of {items.length} entries </p>
    </>
}
function PaypalEmailAddressUpdater(){
    const [paypal_email, setPaypalEmail] = useState(null);
    const {data, isLoading} = useProfile();
    const [saving, setSaving] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(data) {
            setPaypalEmail(data.paypal_email)
        }
    },[data])

    if(isLoading) return <Skeleton count={4} />

function onSubmit(e){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        setSaving(true)
        setError(false)

        if(!paypal_email) {
            setSuccess(false)
            setError(true)
            setSaving(false)
            return false
        }
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!paypal_email.match(mailformat)) {
            setSuccess(false)
            setError(true)
            setSaving(false)
            return false
        }
        updateProfile({paypal_email})
            .then((data)=>{
                setSuccess(true)
                setSaving(false)
            })

    }

    return <div className="bg-white text-dark registeryour">
            <h5 className="text-center"><strong>Register your PayPal email for instant payouts.</strong></h5>
            <form onSubmit={onSubmit} className="row mt-4 align-items-center">
                <div className="col-md-4 text-md-right paypalemail">
                    <h4 style={{fontSize:18}}><strong>Paypal email</strong></h4>
                </div>
                <div className="col-md-4 my-2">
                    <input type="email" name={"paypal_email"}
                           value={paypal_email}
                           placeholder={"name@address.com"}
                           onChange={(e)=>setPaypalEmail(e.target.value)}
                           className="form-control"/>
                </div>
                <div className="col-md-4">
                    <Button className={'btn btn-primary border-0'}
                            loading={saving}
                            onClick={onSubmit}
                            title={"Register"}/>
                </div>
            </form> 

            <div className="text-center text-light green">{success ? 'Paypal email address updated successfully' : null}</div>
            <div className="text-center text-light red">{error ? 'Please enter valid Email ID' : null}</div>

    </div>
}

export async function getServerSideProps(context) {
    const cookies = context.req.cookies;
    return !cookies.access_token ? {
        redirect:{
            destination:'/login',
            permanent:false
        }
    }: {
        props:{

        }
    }
}

export default PayMe;