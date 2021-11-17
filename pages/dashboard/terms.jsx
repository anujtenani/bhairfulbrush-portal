import React, {useEffect, useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import {useProfile} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import logomain from "../../public/behairful-logo-main.svg";

function Terms(props) {
    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(null);
    const {data} = useProfile();
    useEffect(()=>{
        if(data && data.terms_url){
            setLoading(true)
            fetch(data.terms_url).then((response) => response.text()).then((text) => {
                setLoading(false)
                if (data.terms_url.endsWith('html')) {
                    setText(text)
                } else {
//                    const converter = new showdown.Converter();
//                    this.setState({text: converter.makeHtml(text)});
                }
            });
        }
    },[data])
    return (
        <DashboardContainer title={"Terms and conditions"}>
            <div className="container my-4">
                <div className="card bg-dark">
                    <div className="card-body">
                        <div className="text-center">
                            <img src={logomain} style={{height:100}} />
                        </div>
                        <h1 className={"text-center"}>Terms and conditions</h1>
                        {
                            loading ? <Skeleton count={48}/> :
                                <div dangerouslySetInnerHTML={{__html: text}}/>
                        }
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


export default Terms;
