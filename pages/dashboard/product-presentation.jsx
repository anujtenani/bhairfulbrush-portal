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
        <section className="bg-white p-4 productpresentation">
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
                        Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non locus dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius. Nulla tellus nunc, malesuada at scelerisque eget, cursus at eros. Maecenas pellentesque locus quis erat eleifend sagittis.
                    </ProductContent>  
                </div>
                <div className="col-md-4 giftpart">
                    <ProductContent src={'/presentation_pg_2.jpg'} title={"Brush 1"}>
                        Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan iusto, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non locus dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius. Nulla tellus nunc, malesuada at scelerisque eget, cursus at eros. Maecenas pellentesque lacus quis erat eleifend sagittis.
                    </ProductContent>
                </div>
                <div className="col-md-4 giftpart">
                    <ProductContent src={'/presentation_pg_3.jpg'} title={"Brush 2"}>
                        We test at every stage of our process, from manufacturing the gummy to quality checks upon packaging. We ensure that not only the highest quality ingredients are used, but that the highest standard of quality assurance is carried out throughout the whole process.
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