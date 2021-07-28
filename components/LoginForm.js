import React, {useState} from "react";
import {getHttpClient} from "../utils/api";
import SideImage from "./SideImage";

const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

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
        <div className = "row">
            <div className = "col-md-11 col-lg-9 col-xl-5 left-image">
                <SideImage width={'550px'} height={'550px'} />
            </div>
            <div className = "col-12 col-sm-12 col-md-10 col-lg-8 col-xl-7">
                <div className={"flex-container"}>
                    <div className = "col-xl-9">
                         <form className={"form-container"} onSubmit={onFormSubmit}>
                             <h2 className={'sign-in-title'}><strong>Sign In</strong></h2>
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
                border-radius: 2%;
                background-color: white;
                color: black;
              }
              .form-group {
                padding: 0 3rem;
              }
              .sign-in-title {
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

export default LoginForm