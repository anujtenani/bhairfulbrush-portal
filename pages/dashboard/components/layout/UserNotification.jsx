import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Link from 'next/link'
import {useProfile} from "../../../../utils/api";
import Skeleton from "react-loading-skeleton";
import Avatar from "../../../../components/general/Avatar";
function UserNotification(props) {
    const {data, error, isLoading} = useProfile();
    return (
        <UncontrolledDropdown direction={"bottom"}>
            <DropdownToggle color={"transparent"} className="btnnotification"></DropdownToggle>
            <DropdownMenu className={"p-2"}>
                <div className="notificationpart">
                    <div className="iconnot"></div>
                    <div className="linkformat">
                        <a href="#" className="menulink">Account Name</a>
                        <a href="#" className="cts">Custom Action:</a>
                        <a href="#" className="actiontype">Action Description</a>
                        <a href="#" className="dropdowntype">Time frame</a>
                    </div>                  
                </div>
                  <div className="notificationpart">
                    <div className="iconnot"></div>
                    <div className="linkformat">
                        <a href="#" className="menulink">Account Name</a>
                        <a href="#" className="cts">Custom Action:</a>
                        <a href="#" className="actiontype">Action Description</a>
                        <a href="#" className="dropdowntype">Time frame</a>
                    </div>                  
                </div>
                <div className="notificationpart">
                    <div className="iconnot"></div>
                    <div className="linkformat">
                        <a href="#" className="menulink">Account Name</a>
                        <a href="#" className="cts">Custom Action:</a>
                        <a href="#" className="actiontype">Action Description</a>
                        <a href="#" className="dropdowntype">Time frame</a>
                    </div>                  
                </div>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

export default UserNotification;


