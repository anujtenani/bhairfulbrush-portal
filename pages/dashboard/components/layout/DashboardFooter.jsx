import React from 'react';
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa";
import Link from 'next/link'
function DashboardFooter(props) {

    return (
        <footer className="footer py-4 px-4 border-top">
            <div className="container-fluid">
                <div className="row pt-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 text-center">
                        <div className="d-block pb-4">
                            <Link href="/dashboard" passHref>
                                <img src="/behairful-logo.png" alt="Behairful Logo"
                                     className="img-fluid main-footer-logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2">
                        <div className="footer-block-inner d-inline-block text-left">
                            <h5><strong>MENU</strong></h5>
                            <div className="d-flex">
                                <div className="f-list">
                                    <ul className="list-unstyled footer-list">
                                        <FooterLink href={"/dashboard"} title={"Dashboard"} />
                                        <FooterLink href={"/dashboard/pay-me"} title={"Pay Me"} />
                                        <FooterLink href="/forecaster/" title={"Earnings Forecaster"} />
                                        <FooterLink href="/dashboard/faq" title={"FAQ"} />
                                        <FooterLink href="/content/talking_points/" title={"Talking Points"} />
                                        <FooterLink href="/dashboard/terms/" title={"Terms & Conditions"} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-1">
                        <div className="footer-block-inner d-inline-block text-left">
                            <h5><strong>SOCIAL</strong></h5>
                            <ul className="list-unstyled footer-list-social text-center">
                                <li><a href="https://www.facebook.com/behairfulbrush/"><FaFacebook /></a></li>
                                <li className={"d-none"}><a href="https://www.youtube.com/mykitsch"><FaYoutube/></a></li>
                                <li><a href="https://www.instagram.com/behairfulbrush/"><FaInstagram /></a></li>
                                <li className={"d-none"}><a href="https://www.pinterest.com/MyKitsch/"><FaPinterest/></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-5 col-xl-6">
                        <div className="footer-block-inner d-inline-block footer_text_left">
                            <h5><strong>WHY WE DO IT</strong></h5>

                            <div className="d-block">
                                <p>
                                    Behairful is an innovative hair care company that is driven by the belief that with love, anything is possible. Our goal is to continue to evolve hair care and create products that consumers love for years to come. Creating Hair Full of Happiness each strand at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({title, href}){
    return <Link href={href} className={"text-nowrap"} passHref>
        <a>
             <li className={"py-1"}>{title}</li>
        </a>
        </Link>
}

export default DashboardFooter;
