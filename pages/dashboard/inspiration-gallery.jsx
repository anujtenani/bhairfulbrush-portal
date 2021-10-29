import React, { useState } from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import {useCreatives} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import PageBanner from "./components/general/PageBanner";
import DashboardFooter from "./components/layout/DashboardFooter";

function InspirationGallery(props) {
    const {data, error, isLoading} = useCreatives();
    const [count, setCount] = useState(5);

    const imgUrls = [
        'img-ins-b-1.jpg',
        'img-ins-b-2.jpg',
        'img-ins-b-3.jpg',
        'img-ins-b-1.jpg',
        'img-ins-b-2.jpg',
        'img-ins-b-6.jpg',
        'img-ins-b-7.jpg',
        'img-ins-b-5.jpg',
        'img-ins-b-6.jpg',
        'img-ins-b-7.jpg',
        'img-ins-b-11.jpg',
        'img-ins-b-8.jpg',
        'img-ins-b-9.jpg',
        'img-ins-b-10.jpg',
        'img-ins-b-8.jpg',
        'img-ins-b-6.jpg',
        'img-ins-b-7.jpg',
        'img-ins-b-8.jpg',
        'img-ins-b-9.jpg',
        'img-ins-b-1.jpg'
    ];

    const loadMore = () => {
       setCount(count + 5)
    }


    return (
        <div className="container">
            <div className="row">
                 <div className="col-lg-12">
                    <h2 className="headingtitle">Inspiration</h2>
                </div>
            </div>
            <div className="globehome">
                {
                    imgUrls.slice(0, count).map((url, index) => {
                        return <div className="globeimgdown" key={index}>
                            <a href="#"><img src={url} alt={'Image number ' + (index + 1)} /></a>
                        </div>
                     })
                }                
            </div> 
            {
                count < imgUrls.length &&  
                <div className="row">
                     <div className="col-lg-12 text-center mt-5">
                        <a onClick={loadMore} className="btn btn-primary loadmorebtn">Load More</a>
                     </div>                   
                </div>

            }
        </div>
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


export default InspirationGallery;
