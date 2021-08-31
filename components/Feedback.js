import React from "react";
import Image from "next/image";


const Feedback = () => {
    return (
        <section className={"bg-dark py-4"}>
            <div className={"container px-4"}>
                <h5 className={"text-center text-light"}>OUR PARTNERS <span><img src="/heart.svg" alt="heart icon" style={{width:36, height:36}}/></span> BEHAIRFUL</h5>

                <div className="row">
                    <FeedbackItem  src={'Review-1.jpg'} title={'Maegan Blinka'} content={"It’s been such a gift to have the opportunity to be a part of the Behairful ambassador program. I love talking to friends - new and old - about how this brush has benefited my hair care journey. But the best part is that I get to involve my kids in using, sharing, and promoting the products! They love to be included and are my little spokespeople themselves! Thank you for opening up and including me and my family! We are Behairful brand partners for life!"}/>
                    <FeedbackItem  src={'Review-2.jpg'} title={'Kim'} content={"I love working with the Behairful brand. They treat their ambassadors with the utmost respect and integrity, knowing that this is how we help provide for families. They take care of us financially and are prompt with answering questions and guide us towards success as we all learn how to help customers better day after day!"}/>
                    <FeedbackItem  src={'Review-3.jpg'} title={'Christina Rodriguez'} content={"It has been such a phenomenal experience working with Behairful, as a social media influencer, from a financial aspect, the commission earned has been a huge blessing to my family. I cannot thank Behairful enough and will continue to share the Behairful love!"}/>
                </div>
            </div>
        </section>
    );
}

function FeedbackItem({src, title, content}){
    return <div className="col-lg-4 col-md-4 mt-4 mb-4">
        <Cards src={src} title={title} content={content}/>
    </div>
}


const Cards = ({ src, title, content }) => {
    return (
        <>
            <div className = {'text-center'}>
                <img style = {{
                    border: '2px solid white',
                    objectFit: "cover",
                    objectPosition: '75% 0',
                    borderRadius: 64
                }}
                     src = {src}
                     width = {'128px'}
                     height = {'128px'}
                     alt = {title}/>
            </div>

            <div className = "card-body text-light element">
                <h5 className = {"text-center card-title"}>{title}</h5>
                <p className = {"text-center text-muted"}>{content}</p>
            </div>
        </>
    )
}


export default Feedback
