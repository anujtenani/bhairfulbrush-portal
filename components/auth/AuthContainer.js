import React from 'react';
import Logo from "../general/Logo";
import Feedback from "../layout/Feedback";
import Footer from "../layout/Footer";

function AuthContainer({children}) {
    return (
        <>
            <Logo />
            <div className="container loginscreen">
                <div className="signupimg" style={{position:'absolute', right:0}}>
                    <img src="/signup_form_bg.png" alt="" style={{height:600}} className="autosignbg"/>
                    <img src="/mobilesignin.png" alt="" style={{height:600}} className="autosignin" />
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
                        <h2 className={"text-center mb-4 finally"}>A Platform made for creators.</h2>
                        <div className={"text-center authsignup"}>
                            <div className={'signuptext'}>                              
                                <ul className={'getyourcode'}>
                                    <li> 
                                        <div className={'creatorsbox'}>
                                            <span className={'imgautocont-1'}>
                                                <img src={'./iconmob-01.png'}/> 
                                            </span> 
                                            <span className={'imgsignin'}>
                                                <img src={'./imgb-01.png'}/> 
                                            </span> 
                                            <span className={'getyour'}>
                                                Get your code and start earning
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={'creatorsbox'}>
                                             <span className={'imgautocont-1'}>
                                                <img src={'./iconmob-02.png'}/> 
                                            </span> 
                                            <span className={'imgsignin'}>
                                                <img src={'./imgb-02.png'}/> 
                                            </span> 
                                            <span className={'getyour'}>
                                                Forcast your earnings
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={'creatorsbox'}>
                                            <span className={'imgautocont-1'}>
                                                <img src={'./iconmob-03.png'}/> 
                                            </span>
                                            <span className={'imgsignin'}>
                                                <img src={'./imgb-03.png'}/> 
                                            </span> 
                                            <span className={'getyour'}>
                                                See your sales in real time
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={'creatorsbox'}>
                                            <span className={'imgautocont-1'}>
                                                <img src={'./iconmob-04.png'}/> 
                                            </span>
                                            <span className={'imgsignin'}>
                                                <img src={'./imgb-04.png'}/> 
                                            </span> 
                                            <span className={'getyour'}>
                                                Instant payouts
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           

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
