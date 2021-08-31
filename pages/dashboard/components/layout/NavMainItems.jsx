import React from 'react';
import {
    FaApple,
    FaCamera,
    FaChartLine,
    FaDollarSign,
    FaHandHoldingUsd,
    FaHome, FaInfo,
    FaLightbulb,
    FaQuestionCircle
} from "react-icons/fa";
import {
    FiHome,
    FiTrendingUp,
    FiDollarSign,
    FiImage,
    FiHelpCircle,
    FiInfo,
    FiAward,
     FiActivity
} from "react-icons/fi";
import  Link from 'next/link'

const navItems = [
    {
        title:'Dashboard',
        Icon:FiHome,
        href:'/dashboard'
    },
    {
        title:'Sales',
        Icon: FiTrendingUp,
        href:'/dashboard/sales'
    },{
        title:'Crafting the Perfect Post',
        Icon:FiAward,
        href:'/dashboard/perfect-post',
    },
    {
        title:'Grab n\' Go',
        Icon: FiImage,
        href:'/dashboard/grab-n-go'
    },{
        title:"Pay Me",
        Icon: FiDollarSign,
        href:'/dashboard/pay-me'
    },
    {
        title:'Earnings Forecaster',
        Icon: FiActivity,
        href:'/dashboard/forecaster'
    },
    {
        title:'FAQ',
        Icon:FiHelpCircle,
        href:'/dashboard/faq'
    }
]

function NavItem({Icon, href, title}){
    return  <li className="nav-item text-secondary active">
        <Link href={href} >
            <a style={{color:'#ccc'}} className="nav-link d-flex align-items-center">
                <Icon style={{fontSize:18}} />
                <span className={"ml-2"}>{title}</span>
            </a>
        </Link>
    </li>
}
function NavMainItems(props) {
    return (
        <>
            <style global jsx>{`
                .nav-link{
                  padding-top:8px;
                  padding-bottom: 8px;
                }      
                @media(max-width:600px){
                  .nav-link{
                    padding-top:12px;
                    padding-bottom:12px;
                  }
                }
                          
                .nav-link:hover, .nav-link:focus{
                  color:black
                }
            `}
            </style>
        <ul className="navbar-nav">
            {
                navItems.map(({title, Icon, href})=>{
                    return <NavItem key={title} href={href} title={title} Icon={Icon} />
                })
            }
        </ul>
        </>
    );
}

export function NavBottomItems(){
    return <ul className="navbar-nav navbar-nav-bottom">
        <NavItem title={"About Us"} Icon={FiInfo} href={"/dashboard/about"} />
    </ul>
}

export default NavMainItems;
