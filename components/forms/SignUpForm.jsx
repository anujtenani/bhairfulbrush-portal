import React, {useState} from "react";
import {getHttpClient} from "../../utils/api";
import FormGroup from "./FormGroup";
import Button from "../general/Button";
import Link from 'next/link'
import AuthErrorRenderer from "../AuthErrorRenderer";
import Cookies from 'js-cookie'
const SignUpForm = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null)
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
            email, password, instagram,
            name,
        }).then(({data}) => {
            if(data.access_token){
                Cookies.set('access_token', data.access_token, {expires:7})
                window.location = "/"
            }else{
                setCode(data.code || data.error || 'Invalid credentials');
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
            <FormGroup label={"Your name"}>
                <input
                    type = "text"
                    name={"name"}
                    className = "form-control"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup label={"Email address"}>
                <input
                    type = "email"
                    name={"email"}
                    className = "form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>

            <FormGroup label={"Username"}>
                <input
                    type = "text"
                    className = "form-control"
                    onChange={(e) => setInstagram(e.target.value)}
                />
            </FormGroup>

            <FormGroup label={"Password"}>
                <input
                    type = "password"
                    className = "form-control"
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
