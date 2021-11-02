import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import CopyButton from "../../components/general/CopyButton";
import DashboardFooter from "./components/layout/DashboardFooter";
import {useProfile} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import OurPartnersSection from "../../components/layout/Feedback";
import InspirationGallery from "./inspiration-gallery";
import {FiCreditCard, FiMonitor, FiBarChart2, FiDollarSign} from "react-icons/fi";

function Dashboard(props) {
    const {data, isLoading} = useProfile();
    return (
        <DashboardContainer title={"Dashboard"}>
        <div className="usepromo">Use your promo code and Iink to share 5% off & receive a 10% payout.</div>
            <div className="text-dark bg-white homesidebanner">
                <div className="container-fluid">
                    <div className="row flex-md-row-reverse">
                        <div className="col-md-7 text-center">
                            <img src={"/dashboard/dashboard_banner.png"} style={{maxWidth:600, width:'100%'}} />
                        </div>
                        <div className="col-md-5">
                            <div className="p-4 gitoff">
                                <h1 className={"text-left earning"}>Earning With Behairful Is Easy</h1>
                                <div className={"my-2 rounded text-center bg-dark text-white p-2 givepayout"}><strong>GIVE 10% OFF, GET 10% PAYOUT</strong></div>
                                <p>Use your dedicated promo code and link below to share Behairful with the world, they will receive <strong>10% OFF</strong> their order and you will a receive <strong className="tenpercent">10% PAYOUT</strong> for each completed sale.</p>
                            </div>

                            <div className="flex-wrap theperfect">
                                <RowItem title={"Craft The Perfect Post"} Icon={FiMonitor} src={"/imghome-icon-1.png"} />
                                <RowItem title={"Make commissions"} Icon={FiDollarSign} src={"/imghome-icon-2.png"} />
                                <RowItem title={"Track Commissions"} Icon={FiBarChart2} src={"/imghome-icon-3.png"} />
                                <RowItem title={"Get Instant Payouts"} Icon={FiCreditCard} src={"/imghome-icon-4.png"} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mt-4">
                                <span style={{borderRadius:12, backgroundColor:"black", color:"white"}} className={"px-3 py-2 leadpromo"}>PROMO CODE AND LINKS</span>
                                {
                                    isLoading
                                        ? <Skeleton count={5}/>
                                        : <div className={"promocodetable"}>
                                            <div className="indopromo promocode"> <RenderItem color={'#000'} value={data.coupon} text={"Promo Code"}/> </div>
                                            <div className="indopromo promolink"> <RenderItem color={'#000'} value={data.referral_link} text={"Promo Link"}/> </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 feedbackbg">
                <OurPartnersSection />
            </div>
            <section className="inspiration">
                <InspirationGallery />
            </section>

            <DashboardFooter />
        </DashboardContainer>
    );
}

function RowItem({Icon, title, src}){
    return <div className="col-6 mb-4">
        <div className={"d-flex align-items-center iconindex"}>
            <div style={{minWidth:80, minHeight:80, borderRadius:50}} className={"iconindo d-flex align-items-center justify-content-center bg-dark text-light"}>
                <Icon style={{width:40, height:40}}  />
                <img src={src} />
            </div>
            <span className="titleiconindex" style={{fontSize:15, fontWeight:'bold'}}>{title}</span>
        </div>
    </div>

}

function RenderItem({color, text, value}){
    if(!value) return null; 

    return <div className={"text-center mb-4 promohead"} style={{color}}>
        <strong className={"lead d-block text-center promotext"}>{text}</strong>
        <span>  
            <span className={"mr-2 styprocode"}>{value}</span><CopyButton value={value} style={{color}}/> </span>
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
