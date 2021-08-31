import Head from "next/head";
import Logo from "../components/Logo";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import AuthContainer from "../components/auth/AuthContainer";

const forgotPassword = () => {
    return (
        <>
            <Head>
                <title>Forgot Password : Behairful Partners</title>
            </Head>
        <AuthContainer>
            <ForgotPasswordForm />
        </AuthContainer>
        </>
    )
}

export default forgotPassword
