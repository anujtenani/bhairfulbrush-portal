import React from 'react';
import Logo from "../Logo";
import Feedback from "../Feedback";
import Footer from "../Footer";


function AuthContainer({children}) {
    return (
        <>
            <Logo />
            <div className="container">
                <h2 className={"text-center mb-4"}>Finally! A Platform Made For Influencers.</h2>
                <div className="row flex-md-row-reverse">
                    <div className="col-md-6 mb-4">
                        <div className={"card"}>
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  mb-4">
                        <div className={"text-center"}>
                            <img
                                src = {'/Card.png'}
                                style={{maxWidth:'90%', maxHeight:400}}
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
