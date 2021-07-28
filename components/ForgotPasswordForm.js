import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import {FormattedMessage} from "react-intl";
import SideImage from "./SideImage";

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
            <div className = "col-md-11 col-lg-9 col-xl-5 left-image">
                <SideImage width={'550px'} height={'550px'} />
            </div>
            <div className = "col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7">
                <div className={"flex-container"}>
                    <div className = "col-xl-9">
                        <form className={"form-container"} onSubmit={onFormSubmit}>
                            <h2 className={'forgot-password-title'}><strong>Password Reset</strong></h2>
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
                        </form>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .btn {
                width: 100%;
                border-radius: 200px;
              }
              a {
                color: inherit;
              }
              .form-container {
                padding: 2rem;
                border-radius: 10px;
                background-color: white;
                color: black;
              }
              .form-group {
                padding: 0 3rem 1rem 3rem;
              }
              .forgot-password-title {
                text-align: center;
                padding-bottom: 0.2rem;
              }
              .dashboard-title {
                text-align: center;
                padding-bottom: 0.5rem;
              }
              .flex-container {
                  display: flex;
                  padding: 6rem 4rem 8rem 4rem;
                  background-image: url('/form_bg.png');
                  background-repeat: no-repeat;
                  background-size: 55% 98%;
                  background-position: 330px;
              }
              .left-image {
                  padding: 2rem 2rem 4rem 5rem;
                  display: flex;
                  justify-content: flex-end;
                  align-items: center;
              }
        `}</style>
        </div>
    );
}

export default ForgotPasswordForm