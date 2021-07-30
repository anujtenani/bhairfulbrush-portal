import React from "react";
import Image from "next/image";

const Cards = ({ src, title, content }) => {
    return (
        <>
            <style jsx>{`
                .circle {
                    display: flex;
                    justify-content: center;
                    border-radius: 129px;
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    overflow: hidden;
                    top: 10px;
                    left: 50%;
                    margin-left: -95px;
                }
                .element {
                    text-align: center;
                    padding: 11rem 0 0 0;
                    margin-right: 3rem;
                }
                @media (max-width: 575px) {
                    .element {
                        padding-left: 4rem;
                    }
                    .circle {
                        left: 57%;
                    }
                }
                @media (max-width: 767px) {
                    .element {
                         padding-left: 4rem;
                    }
                    .circle {
                        left: 57%;
                    }
                }
                @media (max-width: 991px) {
                    .element {
                        margin: 0 2.5rem 2rem 0;
                    }
                }
            `}</style>
        <div className={'circle'}>
            <Image src={src} width={'250px'} height={'250px'} alt={title} />
        </div>
        <div className = "card-body text-light element">
            <h5 className = "card-title"><strong>{title}</strong></h5>
            <p>{content}</p>
        </div>
        </>
    )
}



const Feedback = () => {
    return (
        <section className={"bg-dark py-4"}>
            <div className={"container px-4"}>
                <h5 className={"text-center text-light"}>OUR PARTNERS <span>
                    <img src="/heart.svg" alt="heart icon" style={{width:36, height:36}}/></span> BEHAIRFUL</h5>
                <div className="row">
                    <FeedbackItem  src={'/maegan-blinka.png'} title={'Maegan Blinka'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum ipsum iusto magnam nulla reiciendis rem reprehenderit sed sint sit. Ad illum impedit incidunt magnam magni numquam similique soluta tempora tenetur velit! Accusantium at dolor dolorum ducimus error excepturi laborum minima molestiae natus provident quae, reiciendis repudiandae ullam veritatis voluptates?"}/>
                    <FeedbackItem  src={'/stacy-joy.png'} title={'Stacy Joy'} content={"Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                    <FeedbackItem  src={'/kim.png'} title={'Kim'} content={"Lorem ipsum dolor sit amet, consectetur" +
                    " adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                    <FeedbackItem  src={'/christina-rodriguez.png'} title={'Christina Rodriguez'} content={"Lorem" +
                    " ipsum dolor sit" +
                    " amet, consectetur" +
                    " adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                </div>
            </div>
        </section>
    );
}

function FeedbackItem({src, title, content}){
    return <div className="col-lg-3 col-md-6 mb-4">
        <Cards src={src} title={title} content={content}/>
    </div>
}

export default Feedback