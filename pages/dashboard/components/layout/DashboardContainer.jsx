import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

import NavSidebar from "./NavSidebar";
import TopNavBar from "./TopNavBar";
import Head from "next/head";

function DashboardContainer({children, title}) {
    const router = useRouter()
    const currentUrl = router.asPath;


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="d-flex w-100">
                <NavSidebar currentUrl={currentUrl}/>
                <div className={"flex-1 flex-fill"}>
                    <TopNavBar/>
                    <div className="topbar-page-spacer d-none d-md-block"></div>
                        {
                            children
                        }
                </div>
            </div>
        </>
    );
}

export default DashboardContainer;
