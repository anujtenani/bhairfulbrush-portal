import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import logomain from "../../public/behairful-logo-main.svg";

function About(props) {
    return (
        <DashboardContainer title={"About us"}>
            <div>
                <div className="container p-4">
                    <div className="card bg-dark abouton">
                        <div className="text-center card-body">
                            <img src={logomain} style={{width:200, marginBottom:24}} />
                            <div className="abrotate" style={{ transform:'rotate(-3deg)'}}>
                                <span className={"bg-light text-dark px-2 py-1 alettertext"} style={{
                                        fontSize:28}}>A Letter from us to you.</span>
                            </div>
                        </div>
                        <div className="aboutsec">
                            <div className="row justify-content-center aboutme">
                                <div className="col-12 col-sm-11 col-lg-10">
                                    <p className="mb-4">
                                        The concept of Behairful was thought of one day when I was caregiving for my mother. She had asked me to brush her hair for her while brushing her hair, I noticed I was having a difficult time untangling her coarse hair. I could never brush her hair without her complaining about the brush pulling her hair. On top of it pulling her hair, it caused a significant amount of breakage. This was NOT okay! From then on, I was determined to find a hairbrush that would actually work for my mother’s thick hair.
                                    </p>
                                    <p className="mb-4">
                                        Unfortunately, that never happened… We purchased several hairbrushes only to have the same result. I was certain that this must’ve been a problem for a lot of women with thick hair. So I decided that I’d craft my very own hairbrush, one that would be just PERFECT for women. Once my own hairbrush came to life the first person I wanted to test it on was my mother. It must’ve been a miracle because it passed with flying colors. No more pain, no more pulling, no more breakage! It was able to gently detangle knots while also styling the hair and leaving it with a natural shine. So I decided to share my craft with you guys!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
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
