import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import FormGroup from "./FormGroup";
import Button from "./Button";
import Link from 'next/link'
import AuthErrorRenderer from "./AuthErrorRenderer";
const SignUpForm = () => {
    const [email, setEmail] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setCode] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setLoading(true);
        setCode(null)
        getHttpClient().post('/partner/register_new', {
            email, password, instagram
        }).then(({data}) => {
            if(data.access_token){
                Cookies.set('access_token', data.access_token, {expires:7})
                window.location = "/"
            }else{
                setError(data.code || data.error || 'Invalid credentials');
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false);
        });
    }

    return (
        <form onSubmit={onFormSubmit} className={"text-dark"}>
            <h2 className={"text-center"}><strong>Sign Up</strong></h2>
            <p className={'text-center'}><strong>Access your dashboard</strong></p>
            <FormGroup label={"Email address"}>
                <input
                    type = "email"
                    className = "form-control"
                    placeholder={"Email address"}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>

            <FormGroup label={"Username"}>
                <input
                    type = "text"
                    className = "form-control"
                    placeholder={"Johndoe"}
                    onChange={(e) => setInstagram(e.target.value)}
                />
            </FormGroup>

            <FormGroup label={"Password"}>
                <input
                    type = "password"
                    className = "form-control"
                    placeholder={"Password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            {
                error ?    <AuthErrorRenderer code={error}/> : null
            }
            <Button loading={loading} type="submit" className = "w-100 btn btn-primary">SIGN UP</Button>
            <h6 className={"text-center mt-4"}>Already have an account? <Link href={'/login'}><a className={"text-dark"}>Sign In</a></Link>
            </h6>
        </form>

    );
}

export default SignUpForm
