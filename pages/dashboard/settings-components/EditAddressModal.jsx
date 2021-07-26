import React, {useEffect, useState} from 'react';
import {updateProfile, useProfile} from "../../../utils/api";
import FormGroup from "../../../components/FormGroup";
import CountrySelector from "../../../components/CountrySelector";
import Modal from "../../../components/Modal";

export default function EditAddressModal(props) {
    const [vals, setVals] = useState({
        address_1: null,
        address_2: null,
        city: null,
        country: null,
        state:null
    })
    const [visible, setVisible] = useState(null)
    const [saving, setSaving] = useState(null)
    const {data} = useProfile();
    useEffect(()=>{
        const {address_1, address_2, city, state, country} = data;
        setVals({
            address_1, address_2, city, state, country
        })
    },[data])

    const onChange = key => e => {
        return setVals((existing)=>{
            return {
                ...existing,
                [key]:e.target.value
            }
        })
    }

    function onSubmit(e){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        setSaving(true)
        updateProfile({
            address_1, address_2, city, state, country
        }).then((data)=>{
            setSaving(false)
            setVisible(false)
        })
    }

    const {address_1, address_2, city, state, country} = vals;



    return (
        <>
            <button className="btn btn-link" onClick={()=>setVisible(true)}>Edit</button>
            <Modal visible={visible}
                   okText={"Submit"}
                   onSubmit={onSubmit}
                   title={"Shipping Address"}
                   confirmLoading={saving}
                   onClose={()=>setVisible(false)}>
            <div className="row">
                <div className="col-md-6">
                    <FormGroup label={"Address 1"}>
                        <input type="text" value={address_1}
                               onChange={onChange('address_1')}
                               className="form-control"/>
                    </FormGroup>
                </div>
                <div className="col-md-6">
                    <FormGroup label={"Address 2"}>
                        <input type="text"
                               onChange={onChange('address_2')}
                               value={address_2} className="form-control"/>
                    </FormGroup>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <FormGroup label={"City"}>
                        <input type="text"
                               onChange={onChange('city')}
                               value={city} className="form-control"/>
                    </FormGroup>
                </div>

                <div className="col-md-4">
                    <FormGroup label={"State/Province"}>
                        <input type="text" value={state}
                               onChange={onChange('state')}
                               className="form-control"/>
                    </FormGroup>

                </div>
                <div className="col-md-4">
                    <FormGroup label={"Country"}>
                        <CountrySelector value={country} onChange={onChange('country')}/>
                    </FormGroup>
                </div>
            </div>
            </Modal>
        </>
    );
}
