import Head from "next/head";
import Logo from "../components/general/Logo";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import Feedback from "../components/layout/Feedback";
import Footer from "../components/layout/Footer";
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
