import Head from "next/head";
import SignUpForm from "../components/SignUpForm";
import AuthContainer from "../components/auth/AuthContainer";

const signup = () => {
    return (
        <>
            <Head>
                <title>Behairful | User Signup</title>
            </Head>
           <AuthContainer>
            <SignUpForm />
           </AuthContainer>
        </>
    );
}

export default signup
