import Head from "next/head";
import Logo from "../components/Logo";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

const forgotPassword = () => {
    return (
        <>
            <Head>
                <title>Forgot Password : Behairful Partners</title>
            </Head>
            <Logo />
            <ForgotPasswordForm />
            <Feedback />
            <Footer />
        </>
    )
}

export default forgotPassword
