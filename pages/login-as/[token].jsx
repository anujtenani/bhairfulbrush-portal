import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import Cookies from 'js-cookie';

export default function Token({token}){
    const router = useRouter();
    useEffect(()=>{
        const token = router.query.token;
        if(router.query.token) {
            Cookies.set('access_token', token)
            window.location = "/dashboard"
        }
    },[router.query])

    return null
}

