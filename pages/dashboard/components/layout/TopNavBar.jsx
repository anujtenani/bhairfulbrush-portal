import React, {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import onClickOutside from "react-onclickoutside";
import {Collapse} from 'reactstrap'
import NavMainItems, {NavBottomItems} from "./NavMainItems";
import UserProfileDropdown from "./UserProfileDropdown";
import UserNotification from "./UserNotification";
import PayMeDropdown from "./PayMeDropdown";
import logomain from "../../public/behairful-logo-main.svg";

function TopNavBar(props) {
const [open, setOpen] = useState(false)
TopNavBar.handleClickOutside = () => setOpen(false);
return (
<nav id="topbar" className={"sticky-top"} style={{zIndex:1}}>
   <div className="dropdownnotification">
      <UserNotification/>
   </div>
   <div className={"px-4 row no-gutters align-items-center topmobdiv"}>
      <div className="col">
         <div className="d-block d-lg-none">
            <HamburgerMenu
               isOpen={open}
               menuClicked={()=>
            setOpen(!open)}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
            />
         </div>
      </div>
      <div className="d-block d-lg-none">
         <div className="col-auto text-center">
            <a href="/" className="logotop">
            <img src={logomain} style={{height:48}}
               alt="Behairful logo" /></a>
         </div>
      </div>
      <div className="col d-flex align-items-center justify-content-end text-left paymentzone">
         <PayMeDropdown />
         <UserProfileDropdown/>
      </div>
   </div>
   <div className="mobilescreen">
        <div className="mobscreenind">
            <Collapse isOpen={open}>
               <div className={"shadow screenopen"} style={{backgroundColor:'rgba(0, 0, 0, 0.96)', position:'fixed', right:0, bottom:0 }} >
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