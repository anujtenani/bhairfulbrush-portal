import Head from "next/head";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import AuthContainer from "../components/auth/AuthContainer";

const forgotPassword = () => {
    return (
        <>
            <Head>
                <title>Forgot Password | Behairful Partners</title>
            </Head>
        <AuthContainer>
            <ForgotPasswordForm />
        </AuthContainer>
        </>
    )
}

export default forgotPassword
