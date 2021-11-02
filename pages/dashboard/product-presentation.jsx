import React from 'react'
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBanner from "./components/general/PageBanner";
import Image from 'next/image'

const ProductPresentation = () => {
    return (
        <DashboardContainer>
            <PageBanner title={"Product Presentation"} height={500} bgSrc={'/presentation_bg.jpg'} />
                <ProductContentContainer />
            <HairFactsContainer />
            <DashboardFooter />
        </DashboardContainer>
    )
}

const HairFactsContainer = () => {
    return (
        <section className="bg-white p-4">
            <div className={"container text-center text-dark"}>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className={"mt-2 hairfacts"}>Supplement Facts</h2>
                     </div>               
                </div> 
                <div className="row">
                    <div className="col-md-12">
                        <div className={"productionpresent d-flex"}>
                            <HairFacts title={"Boar Bristle"} />
                            <HairFacts title={"Boar Bristle"} />
                            <HairFacts title={"Boar Bristle"} />
                            <HairFacts title={"Boar Bristle"} />
                            <HairFacts title={"Boar Bristle"} />
                            <HairFacts title={"Boar Bristle"} />
                        </div>
                    </div> 
                </div>     
            </div>
        </section>
    )
}

const HairFacts = ({ title }) => {
    return (
        <div className={"prdpart my-4 d-flex flex-column"}>
            <Image src={'/happy_face.png'} width={"100px"} height={"100px"} />
            <p className={"font-weight-bold mt-2"}>{title}</p>
        </div>
    )
}

const ProductContentContainer = () => {
    return (
        <div className={"container p-4 my-4 d-flex justify-content-around"}>
            <div className="row">
                <div className="col-md-4 giftpart">
                    <ProductContent src={'/presentation_pg_1.jpg'} title={"Gift"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias doloremque dolores esse mollitia necessitatibus pariatur qui ratione reiciendis sunt.
                    </ProductContent>  
                </div>
                <div className="col-md-4 giftpart">
                    <ProductContent src={'/presentation_pg_2.jpg'} title={"Brush 1"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis dicta exercitationem quis rem. Fugiat labore laborum nostrum odio voluptate?
                    </ProductContent>
                </div>
                <div className="col-md-4 giftpart">
                    <ProductContent src={'/presentation_pg_3.jpg'} title={"Brush 2"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta exercitationem fugit, nesciunt optio quos recusandae ut veritatis. Cumque, excepturi?
                    </ProductContent>
                </div>
            </div>
        </div>
    )
}

const ProductContent = ({ src, title, children }) => {
    return (
        <div>
            <Image src={src} width={"300px"} height={"250px"} />

            <h3 className={"my-2"}>{title}</h3>

            {children}
        </div>
    )
}

export async function getServerSideProps(context) {
    const cookies = context.req.cookies;
    return !cookies.access_token ? {
        redirect:{
            destination:'/login',
            permanent:false
        }
    }: {
        props:{

        }
    }
}

export default ProductPresentation