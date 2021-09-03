import React, {useCallback, useEffect, useState} from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBannerImage from "./components/general/PageBannerImage";
import {updateProfile, upload, useProfile} from "../../utils/api";
import Skeleton from "react-loading-skeleton";
import {useDropzone} from 'react-dropzone'
import Avatar from "../../components/general/Avatar";
import UpdatePaymentCard from "./settings-components/payment-tab";
import EditProfileModal from "./settings-components/EditProfileModal";
import EditEmailModal from "./settings-components/EditEmailModal";
import EditPromoCodeModal from "./settings-components/EditPromoCodeModal";
import EditPasswordModal from "./settings-components/EditPasswordModal";
import EditAddressModal from "./settings-components/EditAddressModal";
import PageBanner from "./components/general/PageBanner";
import PageHeaderBanner from "../../components/PageHeaderBanner";
function Settings(props) {
    const [activeTab, setActiveTab] = useState('profile');
    const {data, isLoading} = useProfile();

    if(!data) return null;
    return (
        <DashboardContainer title={"Settings"}>
            <div>
                <PageHeaderBanner src={"/dashboard/settings_banner.png"}/>
                <section className={"container mx-auto d-flex"}>
                    {
                        isLoading ? <Skeleton width={200}/> : <>
                            <AvatarUpload/>
                            <div className={"ml-2 mt-2"}>
                                <small className={"text-muted"}>ACCOUNT DETAILS</small>
                                <p><i>@{data.instagram}</i></p>
                            </div>
                        </>
                    }
                </section>
                <section className={"container py-4"}>
                    <TabItem title={"Profile"} active={activeTab === "profile"} onClick={()=>setActiveTab('profile')} />
                    <TabItem title={"Payment"} active={activeTab === "payment"} onClick={()=>setActiveTab('payment')} />
                    <div style={{minHeight:350}} className={"mt-4"}>
                    {
                        activeTab === "profile" && <UpdateProfileCard />
                    }
                    {
                        activeTab === "payment" && <UpdatePaymentCard />
                    }
                    </div>
                </section>
            </div>

            <DashboardFooter />
        </DashboardContainer>
    );
}

function AvatarUpload(){
    const [dataUri, setDataUri] = useState(null)
    const onDrop = useCallback(acceptedFiles => {
            const file = acceptedFiles[0]
            console.log(file);
            var reader = new FileReader();
            reader.onload = (e) => {
                setDataUri(e.target.result)
            };
            reader.readAsDataURL(file);
        const form = new FormData();
            form.append("upload", file);
            upload("/partner/files/upload", form)
                .then((data) => updateProfile({profile_photo:JSON.stringify(data)})).catch((e) => {
            })

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const {data} = useProfile();
    if(!data) return null;
    return    <div {...getRootProps()}>
        <input {...getInputProps()} accept={"image/*"} />
        {

        }
        <Avatar
                identifier={data.email}
                style={{marginTop:-35}}
                size={100} alt={"Profile photo"}
                src={dataUri || data.profile_photo}/>
    </div>
}

function UpdateProfileCard(){
    const {data, isLoading, error} = useProfile();
    if(isLoading) return <Skeleton count={20} />
    const {fname, lname, phone, address_1, address_2, coupon, email, city, state, country} = data;
    return  <div className="card bg-dark">
        <div className="card-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        Profile
                    </div>
                    <div className="col-md-8 d-flex justify-content-between">
                        <div>
                            <div>Name: {fname +" "+lname}</div>
                            <div>Phone: {phone}</div>
                        </div>
                        <EditProfileModal />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                        Shipping Address
                    </div>
                    <div className="col-md-8 d-flex justify-content-between">
                        <address>
                           <div>
                               {address_1}
                           </div>
                            <div>{address_2}</div>
                            <div>{city}, {state}, {country}</div>
                        </address>
                        <span><EditAddressModal /></span>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                        Promo Code
                    </div>
                   <div className="col-md-8 d-flex justify-content-between">
                       <span>{coupon}</span>
                       <span><EditPromoCodeModal /></span>
                   </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                        Email
                    </div>
                    <div className="col-md-8 d-flex justify-content-between">
                        <span>{email}</span>
                        <span><EditEmailModal /></span>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                       Password
                    </div>
                   <EditPasswordModal />
                </div>
            </div>
        </div>
    </div>
}

function TabItem({title, active, onClick}){
    return <>
        <style jsx>{`
            button:hover{
                color:var(--primary)
            }
            button, button:focus{
                outline: none;
                box-shadow:none;
            }
            `}
        </style>
        <button
        style={{width:100, outline: 'none', boxShadow:'none'}}
        className={`btn text-center ${active ? 'text-light rounded-0' : ''}`}
                   onClick={onClick}>
        {title}
            <div style={{height:1}} className={active ? "bg-light mt-3" : 'mt-3'}/>
    </button>
        </>
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


export default Settings;
