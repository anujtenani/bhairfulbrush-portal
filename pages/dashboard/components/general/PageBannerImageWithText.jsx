import React from 'react';

function PageBannerImageWithText({text, bgImage, mobileBgImage}) {
    return (<>
            <style jsx>{
                `
                    .bg-img{
                        background:url('${bgImage}') no-repeat;
                        background-position:right;
                        height:468px;
                       
                    }
                    .title-text{
                        font-size:75px;
                        padding-left:24px;
                        padding-right:24px;
                    }
                    .banner-img {
                      display:none;
                      max-width:100%
                    }
                    @media screen and (max-width: 992px){
                        .bg-img{
                            height:auto;
                            background:none;
                        }
                        .banner-img{
                            display:block;
                            margin-top:12px;
                              max-width:100%
                        }
                        .title-text{
                            font-size:48px;
                            margin-top:20px;
                        }
                    }
                `
            }

            </style>
            <div className="px-4 mt-4">

            <section className={"bg-img"}>
            <div className={"row h-100 d-flex align-items-center justify-content-center"}>
                <div className="display-4 bg-danger text-light title-text">{text}</div>
                <img src={mobileBgImage || bgImage} className="banner-img"/>
            </div>
            </section>
            </div>
        </>
    );
}

export default PageBannerImageWithText;
