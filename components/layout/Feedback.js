const Feedback = () => {
    return (
        <section className={"py-4 feedbackpart"}>
            <div className={"container px-4"}>
                <h5 className={"text-center text-light"}>OUR PARTNERS BEHAIRFUL</h5>
                <div className="row">
                    <FeedbackItem  src={'megan.png'} title={'Maegan Blinka'} content={"Its been such a gift working with Goli Gummies influencer progrom! I love talking to my friends - new and old - about how these little gems have benefited my own health!! But the coolest part is that I get to involve my kids in using, sharing and promoting the products! They love to be included and are little spokes people themselves! Thank you for opening up to include me and my family! We are goli gummy groupies no doubt!"}/>
                    <FeedbackItem  src={'stacy.png'} title={'Stacy Joy'} content={"I absolutely love working with the Goli brand and family. They treat their influencers with the utmost respect and kindness, knowing and respecting that this is part of how we put food on the table for families. They take care of us financially and are quick to answer questions and guide us towards success as we all Iearn how to help customers better day by day!"}/>
                    <FeedbackItem  src={'kim.png'} title={'Kim'} content={"It has been such a pleasure to partner with Goli, as a Social Media influencer, From a financial aspect, the commission earned has been a blessing to my family. And I LOVE that through each individual sale, I am indirectly helping provide children around the world with all the goodness of Goli."}/>
                    <FeedbackItem  src={'christiana.png'} title={'Christina Rodriguez'} content={"The Goli partners program has helped me so much! I get to share this amazing product with my followers, and make money doing it! I love waking with Goli!"}/>
                </div>
            </div>
        </section>
    );
}

function FeedbackItem({src, title, content}){
    return <div className="feedithas col-md-3 my-4">
        <Cards src={src} title={title} content={content}/>
    </div>
}

const Cards = ({ src, title, content }) => {
    return (
        <>
            <div className="card bg-dark feedbackborder" style={{height:`calc(100% - 64px)`, marginTop:64}}>
                <div className = {'text-center borderrad'}>
                    <img style = {{
                        marginTop:-64,
                        border: '2px solid white',
                        objectFit: "cover",
                        objectPosition: '75% 0',
                        borderRadius: '100%',
                    }}
                         src = {src}
                         width = {'145px'}
                         height = {'145px'}
                         alt = {title}/>
                </div>

                <div className = "card-body text-light element">
                    <h5 className = {"text-center card-title"}>{title}</h5>
                    <p className = {"text-center text-white"}>{content}</p>
                </div>
            </div>

        </>
    )
}

export default Feedback
