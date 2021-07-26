import React from "react";
import Image from "next/image";

const Cards = ({ src, title, content }) => {
    return (
        <div className = "card" style={{borderRadius: '20px'}}>
            <div className={'circle'}>
                <Image src={src} width={'250px'} height={'250px'} alt={title} />
            </div>
            <div className = "card-body">
                <h5 className = "card-title" style={{textAlign: "center", paddingTop: '4rem'}}>{title}</h5>
                <p style={{textAlign: "center"}}>{content}</p>
            </div>
            <style jsx>{`
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
        </div>
    )
}

const Feedback = () => {
    return (
        <div className={"feedback-container"}>
            <div className={"row"}>
                <div className={'col-sm-12 user-feedback'}>
                    <h3>Our Users Love Behairful</h3>
                </div>
            </div>
            <div className = "row flex-align">
                <div className = "col-10 col-sm-7 col-md-5 col-lg-4 col-xl-2 column">
                    <Cards src={'/img1.jpg'} title={'Daisy'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                </div>
                <div className = "col-10 col-sm-7 col-md-5 col-lg-4 col-xl-2 column">
                    <Cards src={'/img2.jpg'} title={'Gill'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                </div>
                <div className = "col-10 col-sm-7 col-md-5 col-lg-4 col-xl-2 column">
                    <Cards src={'/img3.jpg'} title={'Rose'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                </div>
                <div className = "col-10 col-sm-7 col-md-5 col-lg-4 col-xl-2 column">
                    <Cards src={'/img4.jpg'} title={'Stacy'} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
                </div>
            </div>
            <style jsx>{`
                .feedback-container {
                    background-color: black;
                    color: black;
                    padding: 5rem 3rem 2rem 0;
                }
                .flex-align {
                    display: flex;
                    justify-content: center;
                }
                .column {
                    margin: 3rem 1.5rem 1.5rem 1.5rem;
                    padding-bottom: 2rem;
                }
                .user-feedback {
                    color: white;
                    margin: -3rem 0 3rem 0 ;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export default Feedback