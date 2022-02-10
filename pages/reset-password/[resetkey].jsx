import Head from "next/head";
import {useRouter} from "next/router";
import AuthContainer from "../../components/auth/AuthContainer";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";

export default function Resetkey() {
    const router = useRouter()
    const { resetkey } = router.query
    return (
        <>
            <Head>
                <title>Reset Password: Behairful Partners</title>
            </Head>
            <AuthContainer>
                <ResetPasswordForm resetkey={resetkey} />
            </AuthContainer>
        </>
    )
}
