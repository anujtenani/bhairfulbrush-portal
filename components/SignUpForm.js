import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import SideImage from "./SideImage";
import Image from "next/image";

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
                setCode(data.code)
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false);
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
                        <form className={"form-container"} onSubmit={onFormSubmit}>
                            <h2 className={'main-title'}><strong>Sign Up</strong></h2>
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

                            <div className = "form-group">
                                <label htmlFor = "exampleInputPassword1"><strong>Username</strong></label>
                                <input
                                    type = "text"
                                    className = "form-control"
                                    id = "exampleInputPassword1"
                                    placeholder={"Johndoe"}
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </div>

                            <div className = "form-group">
                                <label htmlFor = "exampleInputPassword1"><strong>Password</strong></label>
                                <input
                                    type = "password"
                                    className = "form-control"
                                    id = "exampleInputPassword1"
                                    placeholder={"Password"}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div style={{margin: '0.5rem 3rem 1.5rem 3rem'}}>
                                <button type = "submit" className = "btn btn-dark">SIGN UP</button>
                            </div>

                            <h6 style={{textAlign: "center", fontWeight: "bold"}}>
                                Already have an account?
                                <a style={{textDecoration: "underline"}} href={'/login'}> Sign In</a>
                            </h6>
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

export default SignUpForm