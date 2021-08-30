import React from "react";
import Image from "next/image";


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


const Cards = ({ src, title, content }) => {
    return (
        <div className={"border rounded-lg"} style={{marginTop:64}}>
            <div className={'text-center'} style={{marginTop:-64}}>
                <img style={{border:'2px solid white', borderRadius:64}} src={src} width={'128px'} height={'128px'} alt={title} />
            </div>
            <div className = "card-body text-light element">
                <h5 className={"text-center card-title"}>{title}</h5>
                <p className={"text-center text-muted"}>{content}</p>
            </div>
        </div>
    )
}


export default Feedback
