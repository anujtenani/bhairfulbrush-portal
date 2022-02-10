import React, {useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import InputGroup from "../../components/InputGroup";
import DefaultCurrencyRender from "../../components/general/DefaultCurrencyRender";
import Big from 'big.js'
import FormGroup from "../../components/forms/FormGroup";
import PageHeaderBanner from "../../components/PageHeaderBanner";

function Forecaster(props) {
    const [followers, setFollowers] = useState(50000)
    const [engagementRate, setEngagementRate] = useState(4)
    const [postsPerMonth, setPostsPerMonth] = useState(2)
    const conversion = followers && engagementRate && postsPerMonth ? Big(followers).times(engagementRate).div(100).times(postsPerMonth)
        .times(2).times(2).div(100).round().toNumber() : 0
    return (
        <DashboardContainer title={"Earning Forecaster"}>
           <div className="forecasterpart"> <PageHeaderBanner height={500} src={"/dashboard/forecaster_banner.png"} /> </div>
                <div className="forcastersection">
                    <div className="container-fluid pr-0 pl-0">
                        <div className="row no-gutters forcasterplz">
                            <div className="col-md-4 col-xl-5 text-dark bg-white">
                                <div className="forcastearning">
                                    <div className="text-center">
                                        <h2 className={"font-weight-bold earningfore"}>Earning Forecaster</h2>
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
                            <div className="col-md-8 col-xl-7 mt-auto">
                                <div className={"forcasterdiv"}>
                                    <div className={" mb-2 text-white p-4 forcastedpart"}>
                                       <p> Forecasted conversions Calculate at 4% conversion on engagements. Earnings per month (Take Home commissions)</p>
                                        <p>Earnings are calculated based on a baseline conversion rate and average lifetime value of our customers at 10% commission on each sale.</p>
                                    </div>
                                    <div className="p-4  mb-2 text-dark convertion">
                                        <h5>FORECASTED CONVERSIONS <span></span></h5>
                                        <h4>{conversion || '-'}</h4>
                                    </div>
                                    <div className="p-4 text-dark commisions">
                                        <h5>EARNINGS PER MONTH <span>(TAKE HOME COMMISSIONS)</span></h5>
                                        <h4>
                                            {
                                                conversion ?
                                                    <DefaultCurrencyRender value={Big(conversion).times(10).toNumber()}/>
                                                    :'-'
                                            }
                                        </h4>
                                    </div>
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
