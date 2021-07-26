import React from "react";
import Image from "next/image";

const Cards = ({ src, title, content }) => {
    return (
        <>
            <style jsx>{`
                .card{
                    margin-top:75px;
                    border-radius:20px;
                }
                .circle {
                    display: flex;
                    justify-content: center;
                    border-radius: 129px;
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    overflow: hidden;
                    top: -75px;
                    left: 50%;
                    margin-left: -75px;
                }
            `}</style>
        <div className="card">
            <div className={'circle'}>
                <Image src={src} width={'250px'} height={'250px'} alt={title} />
            </div>
            <div className = "card-body text-dark">
                <h5 className = "card-title" style={{textAlign: "center", paddingTop: '4rem'}}>{title}</h5>
                <p style={{textAlign: "center"}}>{content}</p>
            </div>

        </div>
        </>
    )
}



const Feedback = () => {
    return (
        <div className={"bg-dark py-4"}>
            <div className={"container px-4"}>
                <h5 className={"text-center text-light"}>OUR PARTNERS <span>
                            <img src="/heart.svg" alt="heart icon" style={{width:36, height:36}}/></span> BEHAIRFUL</h5>
                <div className="row" style={{marginTop:25}}>
                    <FeedbackItem  src={'/img1.png'} title={'Daisy'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                    <FeedbackItem  src={'/img2.png'} title={'Gill'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                    <FeedbackItem  src={'/img3.png'} title={'Rose'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                    <FeedbackItem  src={'/img4.png'} title={'Stacy'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                </div>
            </div>
        </div>
    );
}

function FeedbackItem({src, title, content}){
    return      <div className="col-lg-3 col-md-6 mb-4">
        <Cards src={src} title={title} content={content}/>
    </div>
}

export default Feedback
