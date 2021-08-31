import React from 'react';

export default function Checkbox({checked, value, label, onChange, small, disabled}) {
    return (<div className={'mb-2 pl-4'}>
        <input disabled={disabled} className="form-check-input" onChange={onChange} type="checkbox" id={label + value}
               value={value}
               checked={checked || false}
        />
        {
            small ? <small>
                    <label className="form-check-label" htmlFor={label + value}>{label}</label>
                </small> :
                <label className="form-check-label" htmlFor={label + value}>{label}</label>
        }
    </div>);
}
