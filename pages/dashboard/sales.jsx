import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import {useSales} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import RenderDateAndTime from "../../components/general/RenderDateAndTime";
import DefaultCurrencyRender from "../../components/general/DefaultCurrencyRender";
import PageHeaderBanner from "../../components/PageHeaderBanner";

function Sales(props) {
    const {data, isLoading, error, setPageIndex, setLimit, limit, pageIndex, hasNext, hasPrevious} = useSales()
    return (
        <DashboardContainer title={"Sales"}>
            <PageHeaderBanner title={"Watch your sales grow"} src={"/dashboard/sales_banner.png"} height={500} />

            <div className="py-4">
                <div className="container mt-4">
                    <div className={"d-flex mb-4 justify-content-center align-items-center"}>
                        Show
                            <select className={"form-control rounded mx-2"}
                                    value={limit}
                                    onChange={(e)=>{
                                        setPageIndex(0)
                                        setLimit(e.target.value)
                                    }}
                                    style={{width:100}}>
                                <option value="3">3</option>
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        entries
                    </div>

                    <div className="border" style={{overflow:'hidden', borderRadius:30}}>
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Order number</th>
                                    <th className={"text-right"}>Order Amount</th>
                                    <th className={"text-right"}>Commission</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                isLoading ? <tr>
                                    <td colSpan={4}>
                                    <Skeleton count={3 * limit} />
                                    </td>
                                </tr> : <RenderTableData data={data.data} />
                            }
                            </tbody>
                        </table>
                    </div>

                    <div className={"d-flex align-items-center justify-content-between"}>
                        <span>
                            Showing {(pageIndex * limit) + 1} to {(pageIndex+1) * limit} of {data && data.total} entries
                        </span>

                        <nav>
                            <ul className="pagination mt-4">
                                <li className={`page-item ${hasPrevious ? '' : 'disabled'}`}>
                                    <button disabled={!hasPrevious} onClick={()=>setPageIndex((prev)=>prev-1)} className="page-link">Previous</button>
                                </li>

                                <li className={`page-item ${hasNext ? '' : 'disabled'}`}>
                                    <button disabled={!hasNext} onClick={()=>setPageIndex((prev)=>prev+1)} className="page-link">Next</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <DashboardFooter />
        </DashboardContainer>
    );
}
function RenderTableData({data}){
    if(data.length === 0) return <tr>
        <td colSpan={4}>
            <div className={"mt-2 text-center"}>
                No Sales yet
            </div>
        </td>
    </tr>

    return  data.map((item)=> {
        return <tr key={String(item.order_id)}>
            <td>
                <RenderDateAndTime value={item.order_date} />
            </td>
            <td>
                {item.site_order_number}
            </td>
            <td className={"text-right"}>
                <DefaultCurrencyRender value={item.order_value} />
            </td>
            <td className={"text-right"}>
                <DefaultCurrencyRender value={item.affiliate_commission} />
            </td>

        </tr>
    })
}

export async function getServerSideProps(context) {
    const cookies = context.req.cookies;
    return !cookies.access_token ? {
            redirect:{
                destination:'/login',
                permanent:false
            }
        }: {
            props:{

            }
    }
}

export default Sales;