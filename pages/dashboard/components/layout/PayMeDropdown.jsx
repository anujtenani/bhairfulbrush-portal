import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import DefaultCurrencyRender from "../../../../components/general/DefaultCurrencyRender";
import {FaCaretDown, FaCaretSquareDown,  FaHandHoldingUsd} from "react-icons/fa";
import {FiChevronDown} from "react-icons/fi";
import {usePayouts} from "../../../../utils/api";
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
function PayMeDropdown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {data, error, isLoading} = usePayouts();

    return (
        <Dropdown isOpen={dropdownOpen} toggle={()=>setDropdownOpen(prevState => !prevState)}>
            <DropdownToggle color={"transparent"}>
                <div className={"d-flex align-items-center"}>
                    <div className={"text-center paymesmall"}>
                        <small>Pay Me</small>
                        {
                            isLoading ? <Skeleton count={1} width={30} /> : <div className={"d-flex align-items-center paymetotal"}>
                                <strong className={"d-block"} style={{fontSize: 18}}>
                                    <DefaultCurrencyRender value={data.amount_pending} />
                                </strong>
                                <FiChevronDown style={{fontSize:22}} />
                            </div>
                        }
                    </div>
                </div>
            </DropdownToggle>
            <DropdownMenu className={"py-0 paymedroppage"}>
                <Link href={"/dashboard/pay-me"} passHref>
                    <button className={"btn btn-light w-100"}>
                    <small className={"text-muted"}>Commission</small>
                    <div>
                        {
                            isLoading ? <Skeleton count={1} width={5} /> :
                               <DefaultCurrencyRender value={data.amount_pending}/>
                        }
                    </div>
                    <strong className={"d-block"}>Pay Me <FaHandHoldingUsd /></strong>
                    </button>
                </Link>
                <Link href={"/dashboard/pay-me"} passHref>
                    <button className={"btn btn-light w-100"}>
                    <small className={"text-muted"}>Total Lifetime Payouts</small>
                        {
                            isLoading ? <Skeleton count={1} width={50} /> :
                                <strong className={"d-block"}><DefaultCurrencyRender value={data.amount_paid}/></strong>
                        }
                    </button>
                </Link>
            </DropdownMenu>
        </Dropdown>
    );
}

export default PayMeDropdown;
