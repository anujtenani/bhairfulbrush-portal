import React, {useEffect, useState} from "react";
import {useProfile} from "../../../utils/api";
import Skeleton from "react-loading-skeleton";
import FormGroup from "../../../components/FormGroup";
import Button from "../../../components/Button";

export default function UpdatePaymentCard(){
    const [loading, setLoading] = useState(false)
    const {data, isLoading, error} = useProfile();
    const [paypal, setPaypal] = useState(null);
    useEffect(()=>{
        setPaypal(data.paypal_email)
    },[data])
    if(isLoading) return <Skeleton count={20} />
    return <div className={"card-group"}>
        <div className="card bg-dark">
            <div className="card-body">
                <FormGroup label={"PayPal Email"}>
                    <input type="email"  value={paypal} onChange={(e)=>setPaypal(e.target.value)} name={"email"} className="form-control"/>
                </FormGroup>
                <Button title={"Confirm"} loading={loading} className={"btn btn-primary"}/>
            </div>
        </div>
        <div className="card bg-dark">
            <div className="card-body">
                <p>PayPal</p>
                <small className={"text-secondary"}>Easy, Fast & Safe. Money Transfers made easy. Get Paid Faster</small>
            </div>
        </div>
    </div>
}

