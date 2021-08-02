import Head from "next/head";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";
import Feedback from "../components/Feedback";

const signup = () => {
    return (
        <>
            <Head>
                <title>Behairful | User Signup</title>
            </Head>
            <Logo />
            <SignUpForm />
            <Feedback />
            <Footer />
        </>
    );
}

export default signup