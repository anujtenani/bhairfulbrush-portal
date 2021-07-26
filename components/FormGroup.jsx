import React from 'react';

function FormGroup({label, htmlFor, children, info}) {
    return (
        <div className="form-group">
            {
                label &&
                <label htmlFor={htmlFor}>{label}</label>
            }
            {children}
            {
                info &&
                <small className={"text-muted d-block"}>{info}</small>
            }
        </div>
    );
}

export default FormGroup;
