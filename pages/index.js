import Head from 'next/head'
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";

export default function Home() {
  return (
    <>
        <Head>
            <title>Behairful</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Logo />
        <LoginForm />
        <Feedback />
        <Inspiration />
        <Footer />
    </>
  );
}
