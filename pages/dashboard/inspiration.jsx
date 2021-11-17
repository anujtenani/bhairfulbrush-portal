import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import {useCreatives} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import PageBanner from "./components/general/PageBanner";
import DashboardFooter from "./components/layout/DashboardFooter";

function Inspiration(props) {
    const {data, error, isLoading} = useCreatives();

    return (
        <DashboardContainer title={"Inspiration"}>     
        <div className="inspirationpartmake">      
              <PageBanner title={"Inspiration"} desc={"Here is content we thought could help you! Keep an eye out for monthly promotions"}
                            bgSrc={"/dashboard/grab_n_go.png"} height={500}
                />         
             </div>

            {
                isLoading ? <Skeleton count={50} /> : <div className="inspirationpart">
                    <div className={"container mt-4"}>
                        <div className={"card-columns"}>
                            {
                                data.map((item) => <div key={String(item.media_id)} className={"card"}>
                                        <img src={item.media_url} className={'card-img'} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            }
            <DashboardFooter />
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


export default Inspiration;
