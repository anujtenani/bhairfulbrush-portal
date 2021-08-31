import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import {FormattedMessage} from "react-intl";
import SideImage from "./SideImage";
import Image from "next/image";
import FormGroup from "./FormGroup";
import Button from "./Button";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState(null);
    const [loading,setLoading] = useState(false);
    const [code, setCode] = useState(null);
    const [success, setSuccess] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setLoading(true)
        setCode(null)
        getHttpClient().post('/partner/forgotpassword', {
            email
        }).then(({ data }) => {
            if (data.success) {
                setSuccess({
                    success: <p className={'alert alert-success'}>
                        <FormattedMessage id={'recoverLinkSent'} values={{email}}/>
                    </p>
                });
            } else {
                setCode(data.code)
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        });
    }

    return (
        <form className={"text-dark"} onSubmit={onFormSubmit} >
            <h2 className={'text-center'}><strong>Reset Password</strong></h2>
            <p className={'text-center'}><strong>Access your dashboard</strong></p>
            <FormGroup label={"Email address"}>
                <input
                    type = "email"
                    className = "form-control"
                    placeholder={"Email address"}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <Button type = "submit" className = "btn w-100 btn-primary">Reset Password</Button>
        </form>
    );
}

export default ForgotPasswordForm
