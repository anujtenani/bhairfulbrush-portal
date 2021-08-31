import React, {useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBannerImage from "./components/general/PageBannerImage";
import InputGroup from "../../components/InputGroup";
import DefaultCurrencyRender from "../../components/general/DefaultCurrencyRender";
import Big from 'big.js'
import PageBanner from "./components/general/PageBanner";
import FormGroup from "../../components/FormGroup";
import PageHeaderBanner from "../../components/PageHeaderBanner";

function Forecaster(props) {
    const [followers, setFollowers] = useState(50000)
    const [engagementRate, setEngagementRate] = useState(4)
    const [postsPerMonth, setPostsPerMonth] = useState(2)
    const conversion = followers && engagementRate && postsPerMonth ? Big(followers).times(engagementRate).div(100).times(postsPerMonth)
        .times(2).times(2).div(100).round().toNumber() : 0
    return (
        <DashboardContainer title={"Earning Forecaster"}>
            <PageHeaderBanner height={400} src={"/dashboard/forecaster_banner.png"} />
                <div className="mt-4 py-4">
                    <div className="row no-gutters align-items-center">
                        <div className="col-md-4 text-dark bg-white">
                            <div className="p-4">
                                        <div className="py-2 text-center">
                                            <h5 className={"font-weight-bold text-center"}>Earning Forecaster</h5>
                                        </div>
                                        <FormGroup label={"Number of followers"}>
                                            <input type="number"
                                                   value={followers} onChange={(e)=>setFollowers(e.target.value)}
                                                   className="form-control"/>
                                        </FormGroup>
                                        <FormGroup label={"Engagement Rate"}>
                                            <InputGroup suffix={"%"}>
                                                <input type="number"
                                                       value={engagementRate} onChange={(e)=>setEngagementRate(e.target.value)}
                                                       className="form-control"/>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup label={"Number of posts per month"}>
                                            <input type="number" className="form-control"
                                                   value={postsPerMonth} onChange={(e)=>setPostsPerMonth(e.target.value)}
                                            />
                                        </FormGroup>
                                        <button className={"btn btn-primary w-100"}>Calculate</button>
                                    </div>
                        </div>
                        <div className="col-md-8">
                            <div className={"pl-2"}>
                                <div className={"bg-light mb-2 text-dark p-4"}>
                                    Forecasted conversions Calculate at 4% conversion on engagements. Earnings per month (Take Home commissions)
                                    Earnings are calculated based on a baseline conversion rate and average lifetime value of our customers at 10% commission on each sale.
                                </div>
                                <div className="p-4  mb-2 text-dark bg-white">
                                    <h5><strong>FORECASTED CONVERSIONS</strong></h5>
                                    <h1>{conversion || '-'}</h1>
                                </div>
                                <div className="p-4 text-dark bg-white">
                                    <h5><strong>EARNINGS PER MONTH</strong> (TAKE HOME COMMISSIONS)</h5>
                                    <h1>
                                        {
                                            conversion ?
                                                <DefaultCurrencyRender value={Big(conversion).times(10).toNumber()}/>
                                                :'-'
                                        }
                                        </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <DashboardFooter/>
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
