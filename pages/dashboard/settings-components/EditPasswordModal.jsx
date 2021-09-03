import useInputState from "../../../components/hooks/useInputState";
import React, {useEffect, useState} from "react";
import {updatePassword} from "../../../utils/api";
import Modal from "../../../components/layout/Modal";
import FormGroup from "../../../components/forms/FormGroup";

export default function EditPasswordModal(){
    const [currentPassword, setCurrentPassword] = useInputState(null)
    const [newPassword, setNewPassword] = useInputState(null)
    const [confirmNewPassword, setConfirmNewPassword] = useInputState(null)
    const [saving, setSaving] = useState(false)
    const [visible, setVisible] = useState(false)
    const [success, setSuccess] = useState(null)
    function onSubmit(e){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        const canSubmit = currentPassword && newPassword && newPassword === confirmNewPassword;
        if(canSubmit){
            setSaving(true);
            updatePassword(currentPassword, newPassword)
                .then((data)=>{
                    setSaving(false)
                    setSuccess(true)
                })
        }else{
            setVisible(false)
        }
    }
    useEffect(()=>{
        setSuccess(null)
    },[visible])

    return <>
        <button className="btn btn-link" onClick={()=>setVisible(true)}>Change password</button>
        <Modal visible={visible}
               title={"Email address"}
               okText={"Submit"}
               onSubmit={onSubmit}
               confirmLoading={saving}
               onClose={()=>{
                   setVisible(false)
               }}>
            {
                success ? <p className="alert alert-danger">Password updated</p> : <>
                    <FormGroup label={"Current password"}>
                        <input type="password" value={currentPassword} onChange={setCurrentPassword} className="form-control"/>
                    </FormGroup>
                    <FormGroup label={"New password"}>
                        <input type="password" value={newPassword} onChange={setNewPassword} className="form-control"/>
                    </FormGroup>
                    <FormGroup label={"Confirm password"}>
                        <input type="password" value={confirmNewPassword} onChange={setConfirmNewPassword} className="form-control"/>
                    </FormGroup>
                </>
            }
        </Modal>
    </>
}
