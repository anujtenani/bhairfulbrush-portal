import {useProfile} from "../../../utils/api";
import React, {useEffect, useState} from "react";
import Modal from "../../../components/layout/Modal";
import FormGroup from "../../../components/forms/FormGroup";

export default function EditEmailModal(){
    const {data,} = useProfile();

    const [visible, setVisible] = useState(null)
    const [email, setEmail] = useState(null)
    useEffect(()=>{
        setEmail(data.email)
    },[data])
    function onSubmit(e){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
    }


    return <>
        <button className="btn btn-link" onClick={()=>setVisible(true)}>Edit</button>
        <Modal visible={visible}
               title={"Email address"}
               okText={"Submit"}
               onSubmit={onSubmit}
               confirmLoading={loading}
               onClose={()=>setVisible(false)}>
            <FormGroup label={"Email address"}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
            </FormGroup>
        </Modal>
    </>
}
