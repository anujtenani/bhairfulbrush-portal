import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import CopyButton from "../../components/general/CopyButton";
import DashboardFooter from "./components/layout/DashboardFooter";
import {useProfile} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import OurPartnersSection from "../../components/layout/Feedback";
import {FiCreditCard, FiMonitor, FiBarChart2, FiDollarSign} from "react-icons/fi";

function Dashboard(props) {
    const {data, isLoading} = useProfile();
    return (
        <DashboardContainer title={"Dashboard"}>
            <div className="text-dark bg-white">
                <div className="container-fluid">
                    <div className="row flex-md-row-reverse">
                        <div className="col-md-7 text-center">
                            <img src={"/dashboard/dashboard_banner.png"} style={{maxWidth:600, width:'100%'}} />
                        </div>
                        <div className="col-md-5">
                            <div className="p-4">
                                <h1 className={"text-left display-4"}>Earning With Behairful Is Easy</h1>
                                <div className={"my-2 rounded text-center bg-dark text-white p-2"} style={{fontSize:24}}><strong>GIVE 10% OFF get 10% PAYOUT</strong></div>
                                <p>Use your dedicated promo code and link below to share Behairful with the world, they will receive <strong>10% OFF</strong> their order and you will a receive <strong>10% PAYOUT</strong> for each completed sale.</p>
                            </div>

                            <div className="row d-none d-lg-flex">
                                <RowItem title={"Craft The Perfect Post"} Icon={FiMonitor} />
                                <RowItem title={"Make commissions"} Icon={FiDollarSign} />
                                <RowItem title={"Track Commissions"} Icon={FiBarChart2} />
                                <RowItem title={"Get Instant Payouts"} Icon={FiCreditCard} />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <span style={{borderRadius:12, fontSize:18, backgroundColor:"black", color:"white"}} className={"px-3 py-2 lead"}>PROMO CODE AND LINKS</span>
                        {
                            isLoading
                                ? <Skeleton count={5}/>
                                : <div className={"py-4"}>
                                    <RenderItem color={'#000'} value={data.coupon} text={"Promo Code"}/>
                                    <RenderItem color={'#000'} value={data.referral_link} text={"Promo Link"}/>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className="py-4">
                <OurPartnersSection />
            </div>

            <DashboardFooter />
        </DashboardContainer>
    );
}

function RowItem({Icon, title}){
    return <div className="col-6 mb-4">
        <div className={"d-flex align-items-center"}>
            <div style={{minWidth:80, minHeight:80, borderRadius:50}} className={"mr-4 d-flex align-items-center justify-content-center bg-dark text-light"}>
                <Icon style={{width:40, height:40}}  />
            </div>
            <span style={{fontSize:18, fontWeight:'bold'}}>{title}</span>
        </div>
    </div>

}

function RenderItem({color, text, value}){
    if(!value) return null;

    return <div className={"text-center mb-4"} style={{color}}>
        <strong className={"lead d-block text-center"}>{text}</strong>
        <span style={{fontSize:17}}>
            <span className={"mr-2"}>{value}</span><CopyButton value={value} style={{color}}/> </span>
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


export default Dashboard;
