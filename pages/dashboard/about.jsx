import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";

function About(props) {
    return (
        <DashboardContainer title={"About us"}>
            <div>
                <div className="container p-4">
                    <div className="card bg-dark">
                        <div className="text-center card-body">
                            <img src={"/behairful-logo.png"} style={{width:200, marginBottom:24}} />
                            <div style={{ transform:'rotate(-3deg)', marginBottom:24}}>
                                <span className={"bg-light text-dark px-2 py-1"} style={{
                                        fontSize:28}}>A Letter from us to you.</span>
                            </div>
                        </div>
                            <div style={{marginTop:24}}>
                                <div className="row p-4 justify-content-center">
                                    <div className="col-12 col-sm-11 col-lg-10">
                                        <p className="mb-4">
                                            We felt compelled to say this again, WE ARE SO HAPPY you decided to join the
                                            Goli Family! When we were initially developing our product, our main goal
                                            was to create a gummy that allowed everyone to experience the awesome
                                            benefits that ACV has to offer, while providing 100% of your daily vitamin
                                            needs without that horrible taste. Once we fixed that problem, we realized
                                            there was one more thing that needed fixing. Influencers partnerships are
                                            how a lot of businesses market themselves today, yet the deals often seem
                                            one sided. The company finds someone they like, pays them and the deal is
                                            done, we thought there must be something more we can do for the people that
                                            help us build our brand!
                                        </p>
                                        <p className="mb-4">
                                            That’s when the Goli family was born, we decided to give the people who were
                                            investing their time and effort into our business an opportunity to invest
                                            in themselves. Why not give each influencer we work with the chance to make
                                            10% on all their sales? It became part of our mission to help our
                                            influencers plan for that upcoming vacation, their semester at school or
                                            even that down payment on a future home.
                                        </p>
                                        <p className="mb-4">
                                            If you are looking to expand your career as an influencer or looking for a
                                            way to create part time opportunities, we believe you have found the right
                                            place to do so. We can also provide you with reporting, to accurately show
                                            your engagement and conversion rates. This will allow you to get a deeper
                                            understanding of your power as an influencer and hopefully create future
                                            opportunities for you using your social media platform. So, when considering
                                            grabbing that second job with Uber or McDonalds, remember that Goli give’s
                                            you an opportunity to share in the profits!
                                        </p>
                                        <p className="mb-4">
                                            We want you to feel like you are a part of a family and not an organization,
                                            and that starts with your dedicated rep who is always there for you
                                            questions or concerns. All of us at Goli Nutrition want to help you succeed,
                                            whether you are a seasoned influencer or a first-time user, we are here to
                                            help you grow!
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContainer>
    );
}


// export async function getServerSideProps(context) {
//     const cookies = context.req.cookies;
//     return !cookies.access_token ? {
//         redirect:{
//             destination:'/login',
//             permanent:false
//         }
//     }: {
//         props:{
//
//         }
//     }
// }

export default About;
