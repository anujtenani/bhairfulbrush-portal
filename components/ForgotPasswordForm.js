import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import {FormattedMessage} from "react-intl";
import SideImage from "./SideImage";
import Image from "next/image";

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
        <div className = "row">
            <section className = "col-11 col-sm-11 col-md-10 col-lg-6 col-xl-5 left-image">
                <SideImage width={'490px'} height={'530px'} />
            </section>
            <div className = "col-lg-6 col-xl-7">
                <section className={"flex-container"}>
                    <div className = "col-xl-11">
                        <form className={"form-container"} onSubmit={onFormSubmit} >
                            <h2 className={'main-title'}><strong>Reset Password</strong></h2>
                            <p className={'dashboard-title'}><strong>Access your dashboard</strong></p>
                            <div className = "form-group">
                                <label htmlFor = "exampleInputEmail1"><strong>Email Address</strong></label>
                                <input
                                    type = "email"
                                    className = "form-control"
                                    id = "exampleInputEmail1"
                                    aria-describedby = "emailHelp"
                                    placeholder={"Johndoe@email.com"}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div style={{margin: '0.5rem 3rem 1.5rem 3rem'}}>
                                <button type = "submit" className = "btn btn-dark">Reset Password</button>
                            </div>

                            <div className={'img-design col-md'}>
                                <Image src={'/image-bg.png'} height={'858px'} width={'991px'} alt={'background-image'} />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ForgotPasswordForm