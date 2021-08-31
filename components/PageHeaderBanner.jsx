import React from 'react';

function PageHeaderBanner({src, height}) {
    return (
        <>
            <div style={{height, background: `url(${src}) no-repeat center center`, backgroundSize:'cover'}}/>
        </>
    );
}
PageHeaderBanner.defaultProps = {
    height:300
}

export default PageHeaderBanner;
