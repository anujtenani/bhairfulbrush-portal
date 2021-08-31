import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import PageBannerImageWithText from "./components/general/PageBannerImageWithText";
import {useCreatives} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import PageBanner from "./components/general/PageBanner";
import DashboardFooter from "./components/layout/DashboardFooter";

const inspirationImages = [
    {
        src: "",
        key: "1"
    },
    {
        src: "",
        key: "2"
    },
    {
        src: "",
        key: "3"
    },
    {
        src: "",
        key: "4"
    },
    {
        src: "",
        key: "5"
    },
    {
        src: "",
        key: "6"
    },
    {
        src: "",
        key: "7"
    },
    {
        src: "",
        key: "8"
    },
    {
        src: "",
        key: "9"
    },
]

function GrabNGo(props) {
    const {data, error, isLoading} = useCreatives();
    return (
        <DashboardContainer title={"Inspiration"}>
            <PageBanner title={"Inspiration"}
                        desc={"Here is content we thought could help you! Keep an eye out for monthly promotions"}
                        bgSrc={"/dashboard-bg-1.jpg"} height={500}
            />

            {
                isLoading ? <Skeleton count={50} /> : <div>
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


export default GrabNGo;
