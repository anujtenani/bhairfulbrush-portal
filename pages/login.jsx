import Head from 'next/head'
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <>
            <Head>
                <title>Behairful | PARTNER HUB</title>
            </Head>
            <Logo />
            <LoginForm />
            <Feedback />
            <Footer />
        </>
    );
}
