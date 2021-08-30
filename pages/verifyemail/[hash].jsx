import React, { useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {getHttpClient} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import Link from 'next/link'
import AuthErrorRenderer from "../../components/AuthErrorRenderer";
function VerifyEmail (){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const router = useRouter();

    function verifyEmail() {
        setLoading(true)
        const hash = router.query.hash;
        getHttpClient().post('/partner/verifyemail', {
            code: hash
        }).then(({data}) => {
            setLoading(false)
            if (!data.success) {
                setError(data.message)
            }
        }).catch((e) => {
            setLoading(false)
        });
    }
    useEffect(()=>{
        if(router.query.hash) {
            verifyEmail()
        }
    },[router.query.hash])

    const toDashboard = () => {
        if(localStorage.getItem('access_token')){
            window.location = '/';
        }else{
            window.location = "/login"
        }
    }
    const cmp = error ? (<div>
                <AuthErrorRenderer code={error}/>
                <button className={'btn btn-primary'} onClick={verifyEmail}>
                    Try again
                </button>
            </div>) :
            (<div>
                <h1>Email address verified</h1>
                <p>Thank you for confirming your email address.</p>
                <Link href={"/dashboard"} passHref>
                    <button className={'btn btn-primary'}>Return to Dashboard
                    </button>
                </Link>
            </div>);

        return (
            <div className={'bg-light'}>
                <div className={'container-fluid'}>
                    <div className={'row px-2 justify-content-center align-items-center  min-vh-100'}>
                        <div className={'card col-md-4 shadow-md'}>
                            <div className={'card-body'}>
                                {
                                    loading ? <Skeleton count={12} /> : cmp
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default VerifyEmail;
