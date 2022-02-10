import React from 'react';

function InputGroup({prefix, suffix, children}) {
    return (
        <div className="input-group">
            {
                prefix && <div className="input-group-prepend">
                <span className="input-group-text">{prefix}</span>
                </div>
            }
            {children}
            {
                suffix &&<div className="input-group-append">
                <span className="input-group-text">{suffix}</span>
                </div>
            }
        </div>
    );
}
export default InputGroup;