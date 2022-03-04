import React, {useMemo, useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBanner from "./components/general/PageBanner";
import {FaPlus, FaMinus} from "react-icons/fa";
import Collapse from 'reactstrap/lib/Collapse'

const faqConfig = [
        {
            q:'1. How does my promo code work ?',
            a:'Your unique promo code let’s you make 10% for every sale you generate, for as long as you are an active member of the Behairful ambassador platform. Share this code with your followers every time you post about Goli Gummies, simply add it to your caption, story or as a link in your bio. Don’t forget to share the code with your audience. If you have any other questions feel free to contact us.'
        },
        {
            q:'2. How can I view my earnings ?',
            a:'You can easily monitor your performance and earnings in the Sales portal. If you want to forecast your earning potential, please visit the Earnings Forecaster.'
        },
        {
            q:'3. What are my payout options ?',
            a:'All payments are made using PayPal. If you should want to cash out simply visit the Pay Me  portal and request to be paid. If you haven’t already registered your PayPal account, you must do so prior to being paid.'
        },
        {
            q:'4. Will I get an invoice ?',
            a:'Yes, you can generate an invoice when requesting to be paid. This invoice can be easily downloaded for your records.'
        },
        {
            q:'5. Where can I find additional information about the product ?',
            a:'We understand the importance of being informed about a product before promoting it. The Our Brush page has all the information you need about Behairful from the materials used, to the benefits of our hairbrush.'
        },
        {
            q:'6. Can I change my contact information and shipping address ?',
            a:'Absolutely. Just click on your profile photo in the upper right-hand corner, and select Settings from the dropdown. Once in settings, you will be able to change a variety of information. The more up-to-date the information, the better we can service you!'
        },
        {
            q:'7. I forgot my login details. What should I do ?',
            a:'In case you forget your login details you can simply ask for a password reset on the login page.'
        },
        {
            q:'8. What are the content and post guidelines ?',
            a:'You can find all post and content guidelines on our How to Craft the Perfect Post page. '
        },
        {
            q:'9. Are my post’s supposed to follow the FTC guidelines ?',
            a:'Yes, all posts should follow FTC guidelines.'
        },
        {
            q:'10. Is there an expiry date for my promo code ?',
            a:'No, your unique promo code is yours forever! With this code you make 10% per sale. So keep sharing and keep earning! '
        }
]

function Faq(props) {
    return (
        <DashboardContainer title={"Frequently asked questions"}>
            <div className="faqitempart">
                <PageBanner bgSrc={'/faq_image.jpg'} height={500} title={"FAQ"} />

                <div className="container my-4">
                    {
                        faqConfig.map(({q, a}, index)=>{
                            return <FAQItem a={a} q={q} key={String(index)} />
                        })
                    }
                </div>

                <DashboardFooter />
            </div>
        </DashboardContainer>
    );
}

function FAQItem({q, a}){
    const [isOpen, setOpen] = useState(false)

    return <div className={"mb-4 faqpart"} style={{borderRadius:25, overflow:'hidden'}}>
        <button onClick={() => setOpen(!isOpen)} className={"openfaqpage btn w-100 d-flex justify-content-between align-items-center"}>
            <div className="text-light faqhead">{q}</div>
            {
                isOpen ? <FaMinus/> : <FaPlus/>
            }
        </button>

        <Collapse isOpen={isOpen} className="faqans">
            <div className="bg-light text-dark faqopen">{a}</div>
        </Collapse>
    </div>
}



export async function getServerSideProps(context) {
    const cookies = context.req.cookies;
    return !cookies.access_token  ? {
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
