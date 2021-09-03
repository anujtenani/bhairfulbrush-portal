import Head from "next/head";
import Logo from "../components/general/Logo";
import Footer from "../components/layout/Footer";
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