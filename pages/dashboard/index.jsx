import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import CopyButton from "../../components/general/CopyButton";
import DashboardFooter from "./components/layout/DashboardFooter";
import {useProfile} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import OurPartnersSection from "../../components/Feedback";
import {FiCreditCard, FiMonitor, FiBarChart2, FiDollarSign} from "react-icons/fi";

function Dashboard(props) {
    const {data, isLoading} = useProfile();
    return (
        <DashboardContainer title={"Dashboard"}>
            <div className="text-center text-dark bg-white">
                <img src={"/dashboard-banner.png"} style={{maxWidth:600, width:'100%', marginBottom:40}} />
                <h2>Earning With Behairful Is Easy</h2>
                <p>Use your promo code and link to share <span className={'lead'}><strong>5% off</strong></span> & <br/> receive a <span className={"lead"}><strong>10% payout</strong></span></p>
                <span style={{borderRadius:12, fontSize:18, backgroundColor:"black", color:"white"}} className={"px-3 py-2 lead"}>PROMO CODE AND LINKS</span>

                {
                    isLoading ? <Skeleton count={5}/> : <div className={"py-4"}>
                        <RenderItem color={'#000'} value={data.coupon} text={"Promo Code"}/>
                        <RenderItem color={'#000'} value={data.referral_link} text={"Promo Link"}/>
                    </div>
                }
                <div className="container" style={{maxWidth:800}}>
                    <div className="row">
                        <RowItem title={"Craft The Perfect Post"} Icon={FiMonitor} />
                        <RowItem title={"Make commissions"} Icon={FiDollarSign} />
                        <RowItem title={"Track Commissions"} Icon={FiBarChart2} />
                        <RowItem title={"Get Instant Payouts"} Icon={FiCreditCard} />

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
            <div style={{width:100, height:100, borderRadius:50}} className={"mr-4 d-flex align-items-center justify-content-center bg-dark text-light"}>
                <Icon style={{width:48, height:48}}  />
            </div>
            <span style={{fontSize:18, fontWeight:'bold'}}>{title}</span>
        </div>
    </div>

}

function RenderItem({color, text, value}){
    return <div className={"text-center mb-4"} style={{color}}>
        <strong className={"lead d-block text-center"}>{text}</strong>
        <span style={{fontSize:17}}>{value}<CopyButton value={value} style={{color}}/> </span>
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
