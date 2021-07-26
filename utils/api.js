import useSWR, {mutate} from "swr";
import axios from 'axios';
import Cookies from 'js-cookie';
import {useState} from "react";

export function getHttpClient(){
    const headers = {
        'X-GOAFFPRO-PUBLIC-TOKEN':'my-storefront-token',
    }
    if(Cookies.get('access_token')){
        headers['Authorization'] = 'Bearer '+Cookies.get('access_token')
    }
    return axios.create({
            baseURL: 'https://api-server-1.goaffpro.com',
            headers: headers
        }
    )
}

const get = (endpoint)=> getHttpClient().get(endpoint).then(({data})=>data);

export function useStorefrontConfig(){
    const { data, error } = useSWR("/v1/user/program_details", get)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

const getProfile = (endpoint)=> getHttpClient().get(endpoint).then(({data})=>{
    const {fname, lname, email, name, profile_photo, coupon,
        phone,
        address_1, address_2, city, state, country, payment_details_data,
        referral_link,
        instagram,
        terms_url,
    } = data.settings;
    const {paypal_email} = payment_details_data ? JSON.parse(payment_details_data) : {};
    return {
        fname, lname, email, name, phone,
        profile_photo: profile_photo ? JSON.parse(profile_photo).url : null,
        coupon,
        instagram,
        referral_link,
        address_1, address_2, city, state, country,paypal_email,
        terms_url,
    }
});


export function useProfile(){
    const {data, error} = useSWR('/partner/', getProfile)
    return {
        data,
        error,
        isLoading: !data && !error
    }
}

export function usePayouts(){
    const {data, error} = useSWR('/partner/payments', get)
    return {
        data, error,
        isLoading: !data && !error
    }
}

export function updateProfile({fname, lname, address_1, address_2, city, state, country, profile_photo, paypal_email}){
    return getHttpClient()
        .post('/partner',{
            fname, lname, address_2, address_1, city, state, country,
            profile_photo,
            paypal_email
        }).then(({data})=>{
            return mutate('/partner/')
        })

}
export function updatePassword(currentPassword, newPassword){
    return  getHttpClient().post('/partner/change_password', {
        new_password: newPassword,
        new_password_confirm: newPassword,
        current_password: currentPassword
    }).then(({data}) => data).catch((e) => null);

}
export function updatePromoCode(oldPromoCode, newPromoCode){
    return getHttpClient().post('/partner/coupon', {
        coupon_code: newPromoCode,
        old_coupon: oldPromoCode,
    }).then(({data}) =>  mutate('/partner/').then(()=>data)).catch((e) => null);
}

export function useSales(){
    const [pageIndex, setPageIndex] = useState(0);
    const [limit, setLimit] = useState(10);
    const { data , error} = useSWR(`/partner/sales/?limit=${limit}&offset=${pageIndex*limit}`, get);
    const total = data && data.total;
    return {
        data, isLoading:!data && !error,
        error,
        total,
        hasPrevious: pageIndex > 0,
        hasNext: total > ((pageIndex + 1) * limit),
        setPageIndex,
        setLimit,
        limit, pageIndex
    }
}

export function useCreatives(){
    const {data, error} = useSWR('/partner/creatives', get)
    return {
        data, isLoading: !data && !error,
        error,
    }
}

export function upload(endpoint, body){
    //remove the content type header
    return getHttpClient().post(endpoint, body).then(({data}) => data);
}

function useSignup(){

}
function useForgotPassword(){

}
