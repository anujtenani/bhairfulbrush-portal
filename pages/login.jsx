import Head from 'next/head'
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";

export default function Login() {
    return (
        <>
            <Head>
                <title>Behairful</title>
            </Head>
            <Logo />
            <LoginForm />
            <Feedback />
            <Inspiration />
            <Footer />
        </>
    );
}
