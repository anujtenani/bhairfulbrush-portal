import React, {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import onClickOutside from "react-onclickoutside";
import {Collapse} from 'reactstrap'
import NavMainItems, {NavBottomItems} from "./NavMainItems";
import UserProfileDropdown from "./UserProfileDropdown";
import PayMeDropdown from "./PayMeDropdown";
function TopNavBar(props) {
    const [open, setOpen] = useState(false)
    TopNavBar.handleClickOutside = () => setOpen(false);
    return (
        <nav id="topbar" className={"sticky-top"} style={{zIndex:1}}>
            <div className={"px-4 border-bottom d-flex align-items-center justify-content-lg-end justify-content-between"}>
                <div className="d-block d-lg-none">
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={()=>setOpen(!open)}
                        width={18}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>
                <div className="d-block d-lg-none">
                    <img src="/behairful-logo.png"
                         alt="Behairful logo" />
                </div>
                <div className={"d-flex"}>
                    <PayMeDropdown />
                    <UserProfileDropdown/>
                </div>
            </div>
            <div className="d-block d-lg-none" style={{position:'relative'}}>
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.96)', position:'absolute', top:0, left:0, right:0}}>
                <Collapse isOpen={open}>
                    <div className={"p-4 shadow"} >
                        <NavMainItems />
                        <NavBottomItems />
                    </div>
                </Collapse>
                </div>
            </div>
        </nav>
    );
}


const clickOutsideConfig = {
    handleClickOutside: () => TopNavBar.handleClickOutside
};

export default onClickOutside(TopNavBar, clickOutsideConfig);
