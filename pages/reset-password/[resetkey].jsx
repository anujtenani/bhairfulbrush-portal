import Head from "next/head";
import TopLogo from "../landing/components/TopLogo";
import FormSideImage from "../landing/components/FormSideImage";
import OurPartnersSection from "../landing/components/OurPartnersSection";
import LandingFooter from "../landing/components/LandingFooter";
import ResetPasswordForm from "../landing/components/ResetPasswordForm";
import {useRouter} from "next/router";

export default function Resetkey() {
    const router = useRouter()
    const { resetkey } = router.query
    return (
        <>
            <Head>
                <title>Reset Password: Kitsch Partners</title>
            </Head>
            <div className={"container"}>
                <TopLogo />
                <div className="row align-items-center justify-content-center lms-main-content flex-grow-1">
                    <FormSideImage />
                    <div className="col-12 col-md-12 col-lg-6 mt-4 mt-md-0 order-1 order-lg-2 overflow_box">
                        <div className="login-form-container">
                            <ResetPasswordForm resetkey={resetkey} />
                            <div className="bg"/>
                        </div>
                    </div>
                </div>
            </div>
            <OurPartnersSection />
            <LandingFooter />
        </>
    )
}
