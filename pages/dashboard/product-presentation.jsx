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
        <div className={"container text-center text-dark p-2 bg-white"}>
            <h1 className={"mt-2"}>Hair Facts</h1>

            <div className={"px-4 d-flex justify-content-around"}>
                <HairFacts title={"Boar Bristle"} />
                <HairFacts title={"Boar Bristle"} />
                <HairFacts title={"Boar Bristle"} />
                <HairFacts title={"Boar Bristle"} />
                <HairFacts title={"Boar Bristle"} />
            </div>
        </div>
    )
}

const HairFacts = ({ title }) => {
    return (
        <div className={"mt-4 d-flex flex-column"}>
            <Image src={'/happy_face.png'} width={"75px"} height={"80px"} />

            <p className={"font-weight-bold mt-2"}>{title}</p>
        </div>
    )
}

const ProductContentContainer = () => {
    return (
        <div className={"container p-4 my-4 d-flex justify-content-between"}>
            <ProductContent src={'/presentation_pg_1.jpg'} title={"Gift"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias doloremque dolores esse mollitia necessitatibus pariatur qui ratione reiciendis sunt.
            </ProductContent>

            <ProductContent src={'/presentation_pg_2.jpg'} title={"Brush 1"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis dicta exercitationem quis rem. Fugiat labore laborum nostrum odio voluptate?
            </ProductContent>

            <ProductContent src={'/presentation_pg_3.jpg'} title={"Brush 2"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta exercitationem fugit, nesciunt optio quos recusandae ut veritatis. Cumque, excepturi?
            </ProductContent>
        </div>
    )
}

const ProductContent = ({ src, title, children }) => {
    return (
        <div>
            <Image src={src} width={"300px"} height={"250px"} />

            <h3>{title}</h3>

            {children}
        </div>
    )
}

export default ProductPresentation