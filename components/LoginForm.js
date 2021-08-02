import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import Image from "next/image";
import SideImage from "./SideImage";

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
            if(data.access_token) {
                Cookies.set('access_token', data.access_token, {expires:7})
                window.location = "/"
            } else {
                setError(data.error || 'Invalid credentials');
            }
            setLoading(false);
        }).catch(() => {
            setLoading(false)
        });
    }


    return (
        <div className = "row row-style">
            <section className = "col-11 col-sm-11 col-md-10 col-lg-6 col-xl-5 left-image">
                <SideImage width={'490px'} height={'530px'} />
            </section>
            <div className = "col-lg-6 col-xl-7">
                <section className={"flex-container"}>
                    <div className = "col-xl-11">
                         <form className={"form-container"} onSubmit={onFormSubmit}>
                             <h2 className={'main-title'}><strong>Sign In</strong></h2>
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
                                 <label htmlFor = "exampleInputPassword1"><strong>Password</strong></label>
                                 <input
                                     type = "password"
                                     className = "form-control"
                                     id = "exampleInputPassword1"
                                     placeholder={"Password"}
                                     onChange={(e) => setPassword(e.target.value)}
                                 />
                             </div>

                             <div className={"form-group"} style={{textAlign: "right"}}>
                                 <a href={'/forgot-password'} tabIndex={'-1'}>Forgot Password?</a>
                             </div>

                             <div style={{margin: '0.5rem 3rem 1.5rem 3rem'}}>
                                <button type = "submit" className = "btn btn-dark">SIGN IN</button>
                             </div>

                             <h6 style={{textAlign: "center", fontWeight: "bold"}}>
                                 Don't have an account yet?
                                 <a style={{textDecoration: "underline"}} href={'/signup'}> Sign Up</a>
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

export default LoginForm