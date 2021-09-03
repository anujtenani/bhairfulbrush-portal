import React, {useState} from 'react';
import Cookies from "js-cookie";
import {getHttpClient} from "../../utils/api";
import AuthErrorRenderer from "../AuthErrorRenderer";
import FormGroup from "./FormGroup";
import Checkbox from "../general/Checkbox";
import Button from "../general/Button";

function ResetPasswordForm({resetkey}) {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState(null)
    const [code, setCode] = useState(null)
    const doReset = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setLoading(true)
        setCode(null)
        getHttpClient().post('/partner/resetpassword', {
            email, password, resetkey
        }).then(({data}) => {
            if (data.access_token) {
                Cookies.set('access_token', data.access_token, {expires:7})
                window.location = "/"
            }else{
                setCode(data.code)
                setLoading(false)
            }
        }).catch((e) => {
            setLoading(false)
        });
    }


    return (
        <div className="box shadow" style={{color:'black'}}>
            <div className="lfc-title-block">
                <h1 className="display-4 text-center mb-3">Password Reset</h1>
                <p className="text-center mb-2 mb-md-5">Access your dashboard.</p>
            </div>
            <form id="signup-form" onSubmit={doReset} method="POST" autoComplete="on">
                {
                    code && <AuthErrorRenderer code={code} />
                }
                <FormGroup label={"Email address"}>
                    <input className={'form-control'}
                           autoComplete={'email'}
                           type={'email'}
                           onChange={(e)=>setEmail(e.target.value)}
                           value={email}
                    />
                </FormGroup>
                <FormGroup label={"New password"}>
                    <input className={'form-control'}
                           autoComplete={'new-password'}
                           type={passwordVisible ? 'text' : 'password'}
                           onChange={(e)=>setPassword(e.target.value)}
                           value={password}
                    />
                </FormGroup>
                <FormGroup>
                    <Checkbox label={'Show password'} checked={passwordVisible}
                              onChange={(e)=>setPasswordVisible(e.target.checked)} value={'passwordVisible'}/>
                </FormGroup>
                <Button className={"btn btn-primary"} loading={loading} title={"Reset Password"} />
            </form>
        </div>
    );
}

export default ResetPasswordForm;
