import React from 'react';

function Button({title, onClick, loading, children, disabled, className}) {
    return (
        <button onClick={onClick} className={`btn ${className || 'btn-outline-primary w-100'}`} type="submit" disabled={loading || disabled}>
            {
                loading ? <>
                    <span className="spinner-grow" style={{width: 18, height: 18}} role="status"
                          aria-hidden="true"></span>
                    <span className="sr-only">Loading...</span>
                </> : <>{title}{children}</>
            }
        </button>
    );
}

export default Button;
