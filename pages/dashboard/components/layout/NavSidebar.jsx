import React, {useState} from 'react';
import NavMainItems, {NavBottomItems} from "./NavMainItems";
import Link from 'next/link'
function NavSidebar(props) {
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
                       <a href="/dashboard/" className="navbar-brand"> <img src="/behairful-logo.png"
                             className={"logohome p-2"}
                             style={{maxWidth:'100%', maxHeight:80}}
                             alt="Behairful logo" />
                             </a>
                    </Link>
                    <div className="d-flex flex-column h-100">
                        <NavMainItems />
                        <NavBottomItems />
                    </div>
                </div>
            </nav>
            <div  className="d-none  d-lg-block sideoffbarmain" style={{}} />
        </>
    );
}


export default NavSidebar;
