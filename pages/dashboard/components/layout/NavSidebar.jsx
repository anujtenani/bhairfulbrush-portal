import React, {useState} from 'react';
import NavMainItems, {NavBottomItems} from "./NavMainItems";
import Link from 'next/link'
function NavSidebar(props) {
    return (
        <>
            <nav id="sidebar"
                 style={{
                     minWidth:200, maxWidth:200, width:200,
                     position:'fixed',
                     zIndex:4,
                 }}
                 className="d-none  d-lg-block border-right border min-vh-100">
            <div className="container">
                <Link className="navbar-brand p-2" href="/" passHref>
                    <img src="/behairful-logo.png"
                         style={{width:"100%"}}
                         alt="Behairful logo" />
                </Link>
                <div className="d-flex flex-column h-100">
                    <NavMainItems />
                    <NavBottomItems />
                </div>
            </div>
            </nav>
            <div  className="d-none  d-lg-block" style={{minWidth:200, maxWidth:200, width:200}} />
        </>
    );
}


export default NavSidebar;
