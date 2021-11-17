import React from 'react';
import Logo from "../general/Logo";
import Feedback from "../layout/Feedback";
import Footer from "../layout/Footer";

function AuthContainer({children}) {
    return (
        <>
            <Logo />
            <div className="container loginscreen">
                <div style={{position:'absolute', right:0}}>
                    <img src="/signup_form_bg.png" alt="" style={{height:600}}/>
                </div>                
                <div className="row flex-md-row-reverse" style={{paddingRight:36, paddingLeft:36}}>
                    <div className="col-md-5 mb-4">                        
                        <div className={"card border-0"}>
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 mb-4">
                        <h2 className={"text-center mb-4 finally"}>Finally! A Platform Made For Influencers.</h2>
                        <div className={"text-center"}>
                            <img
                                src = {'/signup_form_left_image.png'} style={{maxWidth:'100%'}} alt = {'behairful-image'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Feedback />
            <Footer />
        </>
    );
}

export default AuthContainer;
