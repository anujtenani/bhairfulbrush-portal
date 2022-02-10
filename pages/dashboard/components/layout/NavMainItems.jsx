import React from 'react';
import {
    FiHome,
    FiTrendingUp,
    FiDollarSign,
    FiImage,
    FiHelpCircle,
    FiInfo,
    FiAward,
    FiActivity, FiArchive
} from "react-icons/fi";
import  Link from 'next/link'

const navItems = [
    {
        title:'Dashboard',
        Icon:FiHome,
        navClass: 'dashboard-div',
        href:'/dashboard'
    },
    {
        title:'Sales',
        Icon: FiTrendingUp,
        navClass: 'sales-div',
        href:'/dashboard/sales'
    },{
        title:'Crafting the Perfect Post',
        Icon:FiAward,
        navClass: 'crafting-div',
        href:'/dashboard/perfect-post',
    },
    {
        title:'Inspiration',
        Icon: FiImage,
        navClass: 'inspiration-div',
        href:'/dashboard/inspiration'
    },{
        title:'Product Presentation',
        Icon: FiArchive,
        navClass: 'product-div',
        href:'/dashboard/product-presentation'
    },{
        title:"Pay Me",
        Icon: FiDollarSign,
        navClass: 'pay-div',
        href:'/dashboard/pay-me'
    },
    {
        title:'Earnings Forecaster',
        Icon: FiActivity,
        navClass: 'earnings-div',
        href:'/dashboard/forecaster'
    },
    {
        title:'FAQ',
        Icon:FiHelpCircle,
        navClass: 'faq-div',
        href:'/dashboard/faq'
    }
]

function NavItem({Icon, navClass, href, title, currentUrl}){
    return  <li className={`nav-item text-secondary  ${currentUrl==href?'active':''}`}>
        <Link href={href} >
            <a style={{color:'#404042'}} className={`nav-link d-flex align-items-center ${navClass}`}>
                <Icon style={{fontSize:18}} />
                <span className={"ml-2"}>{title}</span>
            </a>
        </Link>
    </li>
}
function NavMainItems({props, currentUrl}) {

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
                  color:black;
                }
            `}
            </style>
        <ul className="navbar-nav">
            {
                navItems.map(({title, Icon, navClass, href})=>{
                    return <NavItem key={title} href={href} title={title} navClass={navClass} Icon={Icon} currentUrl={currentUrl} />
                })
            }
        </ul>
        </>
    );
}

export function NavBottomItems({currentUrl}){
 
    return <ul className="navbar-nav navbar-nav-bottom ">
        <NavItem title={"About Us"} Icon={FiInfo} href={"/dashboard/about"} navClass={"about-div"} currentUrl={currentUrl} />
    </ul>
}

export default NavMainItems;
