import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Link from 'next/link'
import {useProfile} from "../../../../utils/api";
import Skeleton from "react-loading-skeleton";
import Avatar from "../../../../components/Avatar";
function UserProfileDropdown(props) {
    const {data, error, isLoading} = useProfile();
    return (
        <UncontrolledDropdown direction={"left"}>
            <DropdownToggle color={"transparent"}>
                {
                    isLoading ? <Skeleton height={48} width={48}/> :
                        <Avatar size={48} identifier={data.email} src={data.profile_photo} alt={"Profile photo"} />
                }
            </DropdownToggle>
            <DropdownMenu className={"p-0"}>
                <Link href={"/dashboard/settings"}>
                    <button className={"btn text-left btn-light w-100 rounded-0"}>Settings</button>
                </Link>
                <a href={"/api/logout"} className={"text-decoration-none"}>
                    <button className={"btn text-left btn-light w-100 rounded-0"}>Logout</button>
                </a>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

export default UserProfileDropdown;
