import Head from 'next/head'
import LoginForm from "../components/LoginForm";
import AuthContainer from "../components/auth/AuthContainer";

export default function Login() {
    return (
        <>
            <Head>
                <title>Behairful | PARTNER HUB</title>
            </Head>
           <AuthContainer>
            <LoginForm />
           </AuthContainer>
        </>
    );
}
