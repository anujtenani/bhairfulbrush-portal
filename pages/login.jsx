import Head from 'next/head'
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <>
            <Head>
                <title>Behairful | User Login</title>
            </Head>
            <Logo />
            <LoginForm />
            <Feedback />
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const headers = {
        'X-GOAFFPRO-PUBLIC-TOKEN': 'my-storefront-token',
        'Authorization': 'Bearer ' + context.req.cookies.access_token
    }

    const { data } = await axios.get(
        'https://api-server-1.goaffpro.com/partner',
        {
            headers: headers
    })

    const status = data.settings.status
    return status !== 'approved' ? {
        redirect:{
            destination:'/access-denied',
            permanent:false
        }
    }: {
        props:{

        }
    }
}