import React from 'react';

function PageBanner({title, desc, bgSrc, height}) {
    return (
        <div>
            <div className="pagebannerto" style={{height, background: `${title || desc ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ' : ''} url(${bgSrc}) no-repeat center center`, backgroundSize:'cover'}}>
            <div className="d-flex justify-content-center align-items-center" style={{height}}>
                <div>
                    <div className="text-center display-4 titleclspage">{title}</div>
                    {
                        desc &&
                        <p className={"text-center mt-4 paratextbanner"} style={{fontSize:18}}>{desc}</p>
                    }
                    </div>

            </div>
            </div>
        </div>
    );
}

export default PageBanner;
