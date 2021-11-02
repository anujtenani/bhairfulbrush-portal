import React, {useState} from "react";
import {getHttpClient} from "../../utils/api";
import Button from "../general/Button";
import Cookies from "js-cookie";
import Link from 'next/link'
import FormGroup from "./FormGroup";
import AuthErrorRenderer from "../AuthErrorRenderer";

const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setLoading(true);
        getHttpClient().post('/partner/login',{
            email,
            password,
        }).then(({data})=>{
            console.log('received data',{data})
            if(data.access_token) {
                Cookies.set('access_token', data.access_token, {expires:7})
                window.location = "/"
            } else {
                setError(data.code || data.error || 'Invalid credentials');
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        });
    }

    return (
             <form onSubmit={onFormSubmit} className={"text-dark"}>
                 <h2 className={"text-dark text-center"}><strong>Sign In</strong></h2>
                 <p className={"text-dark text-center loginformmember"}><strong>Members please login</strong></p>
                 <FormGroup label={"Email address"}>
                     <input type = "email" className = "form-control" onChange={(e) => setEmail(e.target.value)}/>
                 </FormGroup>

                 <div className={"form-group text-right forgotgroup"}>
                     <Link href={'/forgot-password'} tabIndex={'-1'}>
                         <a className={"text-dark"}>Forgot Password?</a>
                     </Link>
                 </div>
                 {
                     error ?    <AuthErrorRenderer code={error}/> : null
                 }

                <FormGroup label={"Password"}>
                     <input
                         type={"password"}
                         className = "form-control"
                         onChange={(e) => setPassword(e.target.value)}
                     />
                 </FormGroup>

                 <Button loading={loading} type = "submit" className="btn btn-primary w-100">SIGN IN</Button>

                 <h6 className={"text-center mt-4 text-dark"}>
                     Don&apos;t have an account yet? <Link href={"/signup"}><a className={"text-dark"}>Sign up</a></Link>
                 </h6>
             </form>
    );
}

export default LoginForm
