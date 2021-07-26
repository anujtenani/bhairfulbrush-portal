import React, {useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBannerImage from "./components/general/PageBannerImage";
import InputGroup from "../../components/InputGroup";
import DefaultCurrencyRender from "../../components/general/DefaultCurrencyRender";
import Big from 'big.js'
import PageBanner from "./components/general/PageBanner";

function Forecaster(props) {
    const [followers, setFollowers] = useState(50000)
    const [engagementRate, setEngagementRate] = useState(4)
    const [postsPerMonth, setPostsPerMonth] = useState(2)
    const conversion = Big(followers).times(engagementRate).div(100).times(postsPerMonth)
        .times(2).times(2).div(100).round().toNumber();
    return (
        <DashboardContainer title={"Earning Forecaster"}>
            <style jsx>{`
                label {
                    color:white;
                    text-transform:uppercase;
                    font-size:0.9rem;
                `}
            </style>
            <>
            <PageBanner height={400} bgSrc={"/dashboard-bg-1.jpg"} />
                <div className="mt-4 py-4">
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex align-items-center justify-content-center text-dark bg-white">
                            <div className="p-2" style={{width:'90%'}}>
                               <div className="py-2 text-center">
                                   <h5 className={"font-weight-bold text-center"}>Earning Forecaster</h5>
                               </div>
                            <div className="form-group">
                                <label className={"text-dark"}>Number of followers</label>
                                <input type="number"
                                       value={followers} onChange={(e)=>setFollowers(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className={"text-dark"}>Engagement Rate</label>
                                <InputGroup suffix={"%"}>
                                    <input type="number"
                                           value={engagementRate} onChange={(e)=>setEngagementRate(e.target.value)}
                                           className="form-control"/>
                                </InputGroup>
                            </div>
                            <div className="form-group">
                                <label className={"text-dark"}>Number of posts per month</label>
                                <input type="number" className="form-control"
                                       value={postsPerMonth} onChange={(e)=>setPostsPerMonth(e.target.value)}
                                />
                             </div>
                                <div className="text-center">
                                    <button className={"btn btn-dark"}>Calculate</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className={"p-4"}>
                                <div className="p-4 mb-4 text-dark bg-white" style={{borderRadius:12}}>
                                    <h5><strong>FORECASTED CONVERSIONS</strong></h5>
                                    <h1>{conversion}</h1>
                                </div>
                                <div className="p-4 text-dark bg-white" style={{borderRadius:12}}>
                                    <h5><strong>EARNINGS PER MONTH</strong> (TAKE HOME COMMISSIONS)</h5>
                                    <h1><DefaultCurrencyRender value={Big(conversion).times(10).toNumber()}/></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <DashboardFooter/>
            </>

        </DashboardContainer>
    );
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


export default Forecaster;
