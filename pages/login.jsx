import Head from 'next/head'
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
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
    const cookies = context.req.cookies;
    console.log('got cookies', cookies)
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
