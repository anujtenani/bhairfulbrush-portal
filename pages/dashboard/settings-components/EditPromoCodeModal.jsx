import React, {useEffect, useState} from "react";
import {updatePromoCode, useProfile} from "../../../utils/api";
import Modal from "../../../components/layout/Modal";
import FormGroup from "../../../components/forms/FormGroup";

function EditPromoCodeModal(){
    const [newPromoCode, setNewPromoCode] = useState(null)
    const {data} = useProfile();

    const [saving, setSaving] = useState(false)
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(null)

    function onSubmit(e){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        const canSubmit = data.coupon !== newPromoCode && newPromoCode && newPromoCode.length > 5
        if(canSubmit){
            setSaving(true)
            updatePromoCode(data.coupon, newPromoCode)
                .then((data)=>{
                    setSaving(false)
                    setVisible(false)
                })
        }else{
            setSaving(false)
        }

    }
    useEffect(()=>{
        if(data) {
            setNewPromoCode(data.coupon)
        }
    },[data])
    if(!data || !data.coupon){
        return null;
    }

    return <>
        <button className="btn btn-link" onClick={()=>setVisible(true)}>Edit</button>
        <Modal visible={visible}
               title={"Email address"}
               okText={"Submit"}
               onSubmit={onSubmit}
               confirmLoading={saving}
               onClose={()=>setVisible(false)}>
            <FormGroup label={"Promo code"}>
                <input type="text" value={newPromoCode} onChange={(e)=>setNewPromoCode(e.target.value)} className="form-control"/>
            </FormGroup>
        </Modal>
    </>
}
export default EditPromoCodeModal
