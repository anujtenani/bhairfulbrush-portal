import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBanner from "./components/general/PageBanner";
import {FiClock, FiMessageSquare, FiList, FiCamera} from "react-icons/fi";
import {Image} from "react-bootstrap";

function PerfectPost(props) {
    return (
        <DashboardContainer title={"Crafting the perfect post"}>
            <PageBanner title={"Crafting the Perfect Post"} height={500}  bgSrc={"/dashboard-bg-1.jpg"} />

            <div className="bg-dark ml-lg-3 text-white">
                <section>
                    <div className="row p-4 bg-white">
                        <Card title={"When should I post ?"} description={"It's important to know when to capture your audience's attention. Instagram's users are most active between 12pm to 1pm Monday to Friday."} src={"/post.png"} />
                        <Card title={"Set the Scene"} description={"Create an engaging photo. Authenticity is key!"} src={"/scene.png"} />
                        <Card title={"Captions, Captions"} description={"Your words matter. Using #'s, trackable links and promo codes are important."} src={"/captions.png"} />
                        <Card title={"Check Your Work"} noBorder description={"Check over your work. Make sure you added all the necessary information, most importantly your promo code."} src={"/work.png"} />
                    </div>

                    <div className="py-2">
                        <br />
                    </div>

                    <h2 className={"text-center"}><strong>Post Requirements</strong></h2>

                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <Point number={1}>Branded post with company tagged</Point>
                            <Point number={2}>Creative + Engaging Post</Point>
                            <Point number={3}>Promo Code Offer For Discount to Followers</Point>
                            <Point number={4}>Company + Campaign Hashtags</Point>
                            <Point number={5}>#Ad (Acknowledgement of Payment)</Point>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{height:50}} />

            <div className="container-fluid text-center">
                <div>
                    <Image style={{maxWidth:"100%", width:750}} src={"/perfect_post_1.png"}/>
                </div>

                <div style={{marginBottom:40}}>
                    <Image style={{maxWidth:"100%", width:750}} src={"/perfect_post_2.png"}/>
                </div>

                <div>
                    <Image style={{maxWidth:"100%", width:750}} src={"/perfect_post_3.png"}/>
                </div>

                <div className="pt-4"/>
            </div>

            <div>
                <div className="mt-2 pl-lg-5 container">
                    <h1><strong>A Little More In-Depth</strong></h1>
                    <p className={"mt-4 lead"}>
                        We want to make sure the post feels genuine and approachable, relaying to your followers that you in fact use this product in your hair care routine. Whether it be for detangling your hair, refreshing, or styling!
                    </p>
                </div>

                <div className="bg-white pl-lg-5 text-dark mb-4">
                    <div className="container">
                        <Step
                            image={"/post_large.png"}
                            step={"STEP 1"}
                            title={"When Should I Post?"}
                            text={"It's important to take into consideration the best times of the day to share, so you can capture the highest engagement. Most career influencers believe that a general rule to live by morning, noon and night, capitalizing on when people use their phones the most. Instagram's users are most active between 12pm and 3pm!"}
                        />

                        <Step
                            image={"/scene_large.png"}
                            step={"STEP 2"}
                            title={"Set the Scene"}
                            text={"Creating a scroll-stopping image / video is a great way to ensure engagement and interest. Every post should speak directly to your audience, knowing your demographic helps in creating the perfect post. Remember to be creative, be quirky, and most importantly have fun while creating your post. "}
                        />

                        <Step
                            image={"/caption_large.png"}
                            step={"STEP 3"}
                            title={"Captions, Captions, Captions"}
                            text={<>
                                <p>Once you have chosen what time you are going to post, create the perfect picture to capture your audience's attention you need to create a caption. Captions describe your post, they can be factual, comedic or playful. Behairful will supply you with certain key terms for you to incorporate in your post caption, in addition to your PROMO-CODE. Below are some key terms for our current campaign.</p>
                                    <ul>
                                        <li>Must use <strong>#Behairful #Curlyhairroutine #Hairbrush #Curlyhaircare</strong></li>
                                        <li>In the post, remember to encourage your followers to click the buy now link (trackable link to be provided) in the caption get the product at a discount price</li>
                                        <li>Don't compare Behairful to any other hair care brand</li>
                                        <li>Don't use profanity or criticize the product or brand</li>
                                        <li>Don't incorporate any other sponsored messages in the post</li>
                                        <li>You must stimulate that this is a paid endorsement with Behairful </li>
                                    </ul>
                            </>}
                        />
                    </div>
                </div>
            </div>

            <div className={"bg-white"} style={{marginTop: '-1.5rem'}}>
                <section className={"container text-light"} style={{backgroundColor: "#0079C0"}}>
                    <div className="ml-lg-2 row">
                        <div className={"p-4"}>
                            <h1><strong>Promo-codes</strong></h1>
                            <p>Is how we go about tracking your conversions/sales, in addition to the way you ensure you are receiving the 10% commission on the lifetime of your sales. You must make sure to let your audience know that the promo code is there to help them, by using your promo code checkout they will receive a discount and without it they are paying full price!</p>
                        </div>

                        <div className={"p-4"}>
                            <h1><strong>Trackable Links</strong></h1>
                            <p>Are the same as promo codes in the sense that they allow you to give your audience a discount at the same time as capturing your 10% commission. Some influencers prefer to use a link over a promo code. This is totally up to you to decide what you'd like, below you will find some examples!</p>
                        </div>

                        <div className={"p-4"}>
                            <h1><strong>Hashtags</strong></h1>
                            <p>Are used to organize and categorize specific themes, ideas and trending topics, they can be a very useful tool in capturing a much larger audience. When using a hashtag, your image or video will be added to a group of images, so anyone searching for #Healthyhair or #Hairgoals will be able to scroll through and run into your content! </p>
                        </div>
                    </div>
                </section>

                <section className="container text-light p-3" style={{backgroundColor: "#0079C0"}}>
                    <div className="ml-lg-1 row">
                        <div className={"p-4"}>
                            <h1><strong>How to Add Links to Your Instagram Stories</strong></h1>
                        </div>

                        <div className={"p-4"}>
                            <Item number={1} title={"Start Your Instagram Story"} description={"It's important to take into consideration the best times to  post an Instagram story, take, animate or video record directly within the Instagram Stories app or swipe up on the Story's screen to import any image taken within the last 24 hours."}/>
                            <br />

                            <Item number={2} title={"Add the URL"} description={"To add a link to your story, click on the chain link at the top of your story, You'll be prompted to input the link destination of your choice in a new window. Paste the promo link you copied from your Behairful portal and tap on the Done button next to the link. Once you've added your link to the story, the chain link icon will be highlighted to indicate that your story now has a link. Continue editing your story and include text, stickers, and add filters to your stories."}/>
                            <br />

                            <Item number={3} title={"Add a Call to Action to your Story"} description={"The link button on Instagram stories is not obvious to the users, so it's important to let your followers know that there is more to your Instagram Stories. The last and perhaps most important step, is to include a call to action in your story to direct users to the Behairful website. Some of the common call to actions are See More or Swipe Up."}/>
                            <br />

                            <Item number={4} title={"Check Your Work"} description={"Once you have created your image and believe you have included everything you needed to, be sure to check your work carefully to ensure that you’ve included everything needed. Once that’s done, you’re ready to live!"}/>
                        </div>
                    </div>
                </section>

                <div className="bg-white text-dark">
                    <section className={"container"}>
                        <div className="my-4 p-4">
                            <h1><strong>Posting a Video Vs. Story</strong></h1>

                            <div className="p-3 row align-items-center">
                                <h3><strong>IG Reels</strong></h3>
                                <p>Reels are more interactive, it gets your audience more involved and you can have more of a conversation about why you love Behairful. In addition to that, your followers can see the product in action in real-time enticing them to want to learn more. It is important to consistently post reels about the product if you find your commissions are not coming in as fast as you'd like.</p>

                                <h3 className={"mt-4"}><strong>IG Photos</strong></h3>
                                <p>Photos never die! The reason we ask for a picture post in addition to a story is because it will always be live on your Instagram feed. Your picture posts will help new followers that organically find you, learn about Behairful and how they can grab your promo code and get a discount on their order. It's very valuable for you to have picture posts, with your promo code in the caption, remember you can capture 10% of the lifetime of all your sales!</p>

                                <p className={"mt-3"}>So, when trying to decide what type of post you want to do today, ask yourself, do you have time to create a short video for your story? Have you already posted your picture post for that month's campaign? These are all questions to consider prior to posting.</p>
                            </div>
                        </div>
                    </section>
            </div>

                <div className={"bg-dark"}>
                    <section className={"container p-4"}>
                        <h2><strong>Once that step is complete,</strong></h2>
                        <h2><strong>There is only one thing left to do...</strong></h2>
                        <div className="text-center my-4">
                            <img src={"/hair_post.png"} style={{maxWidth:600, width:'100%'}} />
                        </div>

                        <h4 className={"text-center"}>We can't wait to see what you come up with, we hope to see you on this week's top performers soon!</h4>

                        <br />

                        <h4 className={"text-center"}>If you have any further questions or concerns, please do not hesitate to reach out to us.</h4>

                    </section>
                </div>
            </div>
            <DashboardFooter />
        </DashboardContainer>
    );
}

function Point({number, children}){
    return <div className={"d-flex align-items-center my-4"} style={{fontSize:18}}>
        <span style={{width:36, height:36, borderRadius:19}} className={"mr-3 bg-white text-dark d-flex align-items-center justify-content-center"}><strong>{number}</strong></span>
        {children}
    </div>
}

function Card({src, title, Icon, description, noBorder}){
    return  <div className={`col-lg-3 col-md-6 text-dark text-center`}>
        <div className="text-center p-4">
            <Image src={src} alt={title} />
        </div>
        <h5 className={"mt-2"}><strong>{title}</strong></h5>
        <p>
            {description}
        </p>
    </div>
}

function Item({number, title, description}){
    return <div>
        <div className={"d-flex"}>
            <div style={{borderRadius:24, width:32, height:32}}
                 className={"d-flex mr-2 align-items-center justify-content-center bg-white text-dark text-center"}><strong>{number}</strong>
            </div>

            <h4 className={"ml-4"}><strong>{title}</strong></h4>
        </div>

        <p style={{marginLeft:64}}>{description}</p>
    </div>
}

function Step({reverse, image, step, title, text, Icon}){
    return  <div className={`row mt-4 py-4`}>
        <div className="d-flex">
            <Image src={image} alt={title} style={{width:150, height:150}} />

            <div className={"m-5"}>
                <Badge text={step} />
                <h3 className={"mt-1"}><strong>{title}</strong></h3>
            </div>
        </div>
        <div className="">

            <p>{text}</p>
        </div>
    </div>
}

function Badge({text}){
    return <span style={{letterSpacing: 3}}><strong>{text}</strong></span>
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


export default PerfectPost;
