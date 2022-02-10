import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Link from 'next/link'
function DashboardFooter(props) {
    return (
        <footer className="footer footerful">
            <div className="container-fluid">
                <div className="row together">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h4 className="weare">Together We Are Changing Lives </h4>
                        <p>Malnutrition is the #1 cause of preventable child deaths. With every sale of Goli, a Child in need received a 6 month supply of essential vitamins through our 1-for-1 parternship with Vitamin Angels. Thank you for your support! </p>
                    </div>
                </div>

                {/* <div className="row logofotmother">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <img src="/footerimglogo.png" className="footerloogo"/>
                    </div>
                </div> */}

                <div className="row pt-3 fotlivepart">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center">
                        <div className="d-block pb-4">
                            <Link href="/dashboard" passHref>
                                <img src="/behairful-fotter-logo.png" alt="Behairful Logo"
                                    className="img-fluid main-footer-logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer-block-inner d-inline-block text-left">
                            <h5>Menu</h5>
                            <div className="d-flex">
                                <div className="f-list">
                                    <ul className="list-unstyled footer-list">
                                        <li><FooterLink href={"/dashboard"} title={"Dashboard"} /></li>
                                        <li><FooterLink href={"/dashboard/pay-me"} title={"Pay Me"} /></li>
                                        <li><FooterLink href="/dashboard/forecaster/" title={"Earnings Forecaster"} /></li>
                                        <li><FooterLink href="/dashboard/faq" title={"FAQ"} /></li>
                                        {
                                            false &&
                                            <li><FooterLink href="/content/talking_points/" title={"Talking Points"} /></li>
                                        }
                                        {
                                            false &&
                                            <li><FooterLink href="/dashboard/terms/" title={"Terms & Conditions"} /></li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                        <div className="footer-block-inner d-inline-block text-left">
                            <h5>Social</h5>
                            <ul className="list-unstyled footer-list-social text-center">
                                <li><a href="https://www.facebook.com/behairfulbrush/" className="facebook"> <FaFacebook /></a></li>
                                <li className={"d-none"}><a href="https://www.youtube.com/mykitsch" className="youtube"><FaYoutube /></a></li>
                                <li><a href="https://www.instagram.com/behairfulbrush/" className="instagram"><FaInstagram /></a></li>
                                <li className={""}><a href="https://www.pinterest.com/MyKitsch/" className="pinterest"><FaPinterest /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="footer-block-inner d-inline-block footer_text_left">
                            <h5>Why we do it</h5>
                            <div className="d-block">
                                <p>
                                    Behairful is an innovative hair care company that is driven by the belief that with love, anything is possible. Our goal is to continue to evolve hair care and create products that consumers love for years to come. Creating Hair Full of Happiness each strand at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center copyrighttext">
                        <p>© 2021 Behairful. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ title, href }) {
    return <Link href={href} className={"text-nowrap"} passHref>
        <a>
            <li className={"py-1"}>{title}</li>
        </a>
    </Link>
}

export default DashboardFooter;
