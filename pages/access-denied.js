import Head from "next/head";
import Logo from "../components/Logo";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import AccessDenied from "../components/AccessDenied";

const accessDenied = () => {
    return (
        <>
            <Head>
                <title>Behairful | Access Denied</title>
            </Head>
            <Logo />
            <AccessDenied />
            <Footer />
        </>
    )
}

export default accessDenied