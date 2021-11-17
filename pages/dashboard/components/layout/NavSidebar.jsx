import React, {useState} from 'react';
import NavMainItems, {NavBottomItems} from "./NavMainItems";
import logomain from "../../public/behairful-logo-main.svg";

import Link from 'next/link'
function NavSidebar({props, currentUrl}) {
    return (
        <>
            <nav id="sidebar"
                 style={{                     
                     position:'fixed',
                     zIndex:4,
                 }}
                     className="d-none sideoffbar  d-lg-block min-vh-100">
                <div className="sidecontainer">
                    <Link className="" href="/" passHref>
                       <a href="/dashboard" className={`navbar-brand ${currentUrl=='/dashboard'?'active':''}`}> <img src={logomain}
                             style={{maxWidth:'100%', maxHeight:80}}
                             alt="Behairful logo" className="logohome" />
                             </a>
                    </Link>
                    <div className="d-flex flex-column h-100">
                        <NavMainItems currentUrl={currentUrl}/>
                        <NavBottomItems currentUrl={currentUrl}/>
                    </div>
                </div>
            </nav>
            <div  className="d-none  d-lg-block sideoffbarmain" style={{}} />
        </>
    );
}


export default NavSidebar;
