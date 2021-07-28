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
                    margin-left: -75px;
                }
            `}</style>
        <div className={'circle'}>
            <Image src={src} width={'250px'} height={'250px'} alt={title} />
        </div>
        <div className = "card-body text-light">
            <h5 className = "card-title" style={{textAlign: "center", paddingTop: '10rem'}}><strong>{title}</strong></h5>
            <p style={{textAlign: "center"}}>{content}</p>
        </div>
        </>
    )
}



const Feedback = () => {
    return (
        <>
            <h5 className={"text-center text-light"} style={{paddingBottom: '1rem'}}>OUR PARTNERS <span>
                <img src="/heart.svg" alt="heart icon" style={{width:36, height:36}}/></span> BEHAIRFUL
            </h5>
            <div className={"flex-item"}>
                <FeedbackItem  src={'/maegan-blinka.png'} title={'Maegan Blinka'} content={"Lorem ipsum dolor sit" +
                " amet," +
                     " consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
            </div>

            <div className={"flex-container flex-item"}>
                <FeedbackItem  src={'/stacy-joy.png'} title={'Stacy Joy'} content={"Lorem ipsum dolor sit amet," +
                     " consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
            </div>

            <div className={"flex-container flex-item"}>
                <FeedbackItem  src={'/kim.png'} title={'Kim'} content={"Lorem ipsum dolor sit amet, consectetur" +
                     " adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
            </div>

            <div className={"flex-container flex-item"}>
                <FeedbackItem  src={'/christina-rodriguez.png'} title={'Christina Rodriguez'} content={"Lorem ipsum" +
                " dolor sit" +
                     " amet, consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique!" +
                " Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
            </div>
            <style jsx>{`
              .flex-item {
                display: flex;
                justify-content: center;
              }
            `}</style>
        </>
    );
}

function FeedbackItem({src, title, content}){
    return      <div className="col-lg-3 col-md-6 mb-4">
        <Cards src={src} title={title} content={content}/>
    </div>
}

export default Feedback

//<div className={"bg-dark py-4"}>
//             <div className={"container px-4"}>
//                 <h5 className={"text-center text-light"}>OUR PARTNERS <span>
//                             <img src="/heart.svg" alt="heart icon" style={{width:36, height:36}}/></span> BEHAIRFUL</h5>
//                 <div className="row">
//                     <FeedbackItem  src={'/img1.png'} title={'Maegan Blinka'} content={"Lorem ipsum dolor sit amet," +
//                     " consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
//                     <FeedbackItem  src={'/img2.png'} title={'Stacy Joy'} content={"Lorem ipsum dolor sit amet," +
//                     " consectetur adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
//                     <FeedbackItem  src={'/img3.png'} title={'Kim'} content={"Lorem ipsum dolor sit amet, consectetur" +
//                     " adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
//                     <FeedbackItem  src={'/img4.png'} title={'Christina Rodriguez'} content={"Lorem ipsum dolor sit" +
//                     " amet, consectetur" +
//                     " adipisicing elit. Asperiores eveniet illo officia ratione similique! Aliquid amet aperiam aspernatur at delectus doloremque dolores enim et explicabo facilis fuga harum hic laborum nemo nostrum perferendis perspiciatis porro quae recusandae rem saepe sapiente, soluta suscipit, tempore totam vitae voluptatem! Eaque eveniet laborum provident."}/>
//                 </div>
//             </div>
//         </div>