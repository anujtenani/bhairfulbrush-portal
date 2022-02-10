import React, {useEffect, useState} from "react";
import {updateProfile, useProfile} from "../../../utils/api";
import Modal from "../../../components/layout/Modal";
import FormGroup from "../../../components/forms/FormGroup";

export default function EditProfileModal() {
    const [saving, setSaving] = useState(false)
    const [visible, setVisible] = useState(false)
    const [vals, setVals] = useState({
        fname: null,
        lname: null,
        phone: null,
    })
    const {data} = useProfile();

    useEffect(() => {
        setVals({
            fname: data.fname,
            lname: data.lname,
            phone: data.phone
        })
    }, [data])

    function onSubmit(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const hasChanged = data.fname !== vals.fname || data.lname !== vals.lname  || data.phone !== vals.phone
        if(hasChanged){
            setSaving(true)
            updateProfile(vals).then((data)=>{
                setSaving(false)
                setVisible(false)
            });
        }else{
            setVisible(false)
        }
    }
    const onChange = (key)=>e=>{
        setVals((existing)=>{
            return {
                ...existing,
                [key]:e.target.value
            }
        })
    }
    return <>
        <button className="btn btn-link" onClick={()=>setVisible(true)}>Edit</button>
        <Modal visible={visible}
               title={"Profile"}
               okText={"Submit"}
               onSubmit={onSubmit}
               confirmLoading={saving}
               onClose={()=>setVisible(false)}>
            <FormGroup label={"First name"}>
                <input type="text" className="form-control" value={vals.fname} onChange={onChange('fname')}/>
            </FormGroup>
            <FormGroup label={"Last name"}>
                <input type="text" className="form-control" value={vals.lname} onChange={onChange('lname')}/>
            </FormGroup>
            <FormGroup label={"Phone"}>
                <input type="text" className="form-control" value={vals.phone} onChange={onChange('phone')}/>
            </FormGroup>
        </Modal>
    </>
}
