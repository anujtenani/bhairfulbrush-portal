import Head from 'next/head'
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <>
            <Head>
                <title>Behairful | User Login</title>
            </Head>
            <Logo />
            <LoginForm />
            <Feedback />
            <Footer />
        </>
    );
}

// export async function getServerSideProps(context) {
//     console.log(context)
//     const cookies = context.req.cookies;
//     console.log(cookies)
//     return !cookies.access_token ? {
//         redirect:{
//             destination:'/signup',
//             permanent:false
//         }
//     }: {
//         props:{
//
//         }
//     }
// }
