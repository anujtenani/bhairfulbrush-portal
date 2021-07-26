import React, {useMemo, useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBanner from "./components/general/PageBanner";
import {FaPlus, FaMinus} from "react-icons/fa";
import Collapse from 'reactstrap/lib/Collapse'
const faqConfig = [
        {
            q:'Question #1',
            a:'Faq Answer 1'
        },
    {
        q:'Question #1',
        a:'Faq Answer 1'
    },
    {
        q:'Question #1',
        a:'Faq Answer 1'
    },   {
        q:'Question #1',
        a:'Faq Answer 1'
    }
]


function Faq(props) {
    return (
        <DashboardContainer title={"Frequently asked questions"}>
            <>
                <PageBanner bgSrc={'https://via.placeholder.com/1024x300'} height={300} title={"FAQ"} />
                <div className="container my-4">

                {
                    faqConfig.map(({q, a}, index)=>{
                        return <FAQItem a={a} q={q} key={String(index)} />
                    })
                }
                </div>
                <DashboardFooter />
            </>
        </DashboardContainer>
    );
}
function FAQItem({q, a}){
    const [isOpen, setOpen] = useState(false)
    return <div className={"border mb-4"} style={{borderRadius:12, overflow:'hidden'}}>
        <button onClick={()=>setOpen(!isOpen)} className={"btn w-100 d-flex justify-content-between align-items-center p-3"}>
            <div className="bg-dark text-light">{q}</div>
            {
                isOpen ? <FaMinus/> :
                    <FaPlus/>
            }
        </button>
        <Collapse isOpen={isOpen}>
        <div className="bg-light text-dark p-3">{a}</div>
        </Collapse>
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

export default Faq;
