import React from 'react';
import Logo from "../general/Logo";
import Feedback from "../layout/Feedback";
import Footer from "../layout/Footer";

function AuthContainer({children}) {
    return (
        <>
            <Logo />
            <div className="container">
                <div style={{position:'absolute', right:0}}>
                    <img src="/signup_form_bg.png" alt="" style={{height:600}}/>
                </div>
                <h2 className={"text-center mb-4"}>Finally! A Platform Made For Influencers.</h2>
                <div className="row flex-md-row-reverse" style={{paddingRight:36, paddingLeft:36}}>
                    <div className="col-md-6 mb-4">
                        <div className={"card"}>
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className={"text-center"}>
                            <img
                                src = {'/signup_form_left_image.png'}
                                style={{maxHeight:480, maxWidth:'100%'}}
                                alt = {'behairful-image'}
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