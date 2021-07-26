import React from 'react';

function PageBanner({title, desc, bgSrc, height}) {
    return (
        <div>
            <div style={{height, background: `${title || desc ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ' : ''} url(${bgSrc}) no-repeat center center`, backgroundSize:'cover'}}>
            <div className="d-flex justify-content-center align-items-center" style={{height}}>
                <div>
                    <div className="text-center display-4">{title}</div>
                    {
                        desc &&
                        <p className={"text-center mt-4"} style={{fontSize:18}}>{desc}</p>
                    }
                    </div>

            </div>
            </div>
        </div>
    );
}

export default PageBanner;
