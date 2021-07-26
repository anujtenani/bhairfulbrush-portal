import React from 'react';
import DashboardContainer from "./components/layout/DashboardContainer";
import DashboardFooter from "./components/layout/DashboardFooter";
import PageBanner from "./components/general/PageBanner";
import {FiClock, FiMessageSquare, FiList, FiCamera} from "react-icons/fi";

function PerfectPost(props) {
    return (
        <DashboardContainer title={"Crafting the perfect post"}>
            <PageBanner title={"Crafting the Perfect Post"} height={500}  bgSrc={"/dashboard-bg-1.jpg"} />

            <div className="bg-white text-dark">
                <section className={"p-4"}>
                <div className="row">
                    <Card title={"When should I post ?"} Icon={FiClock} description={"It's important to know when to capture your audience's attention. Instagram's users are most active between 12pm to 1pm Monday to Friday."} src={"/clock.svg"} />
                    <Card title={"Set the Scene"}  Icon={FiCamera} description={"Create an engaging photo. Authenticity is key!"} src={"/photoshoot.svg"} />
                    <Card title={"Captions, CAPTIONS"}  Icon={FiList} description={"Your words matter. Using #'s, trackable links and promo codes are important."} src={"/chat_bubble.svg"} />
                    <Card title={"Check Your Work"} Icon={FiMessageSquare} noBorder description={"Check over your work. Make sure you added all the necessary information, most importantly your promo code."} src={"/checklist.svg"} />
                </div>
                    <div className="py-4">
                        <hr className={"bg-dark"}/>
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

                <div style={{height:50}}/>
            <div className="container-fluid text-center">
                <div>
                    <img style={{maxWidth:"100%", width:600}} src={"/influencer_example_1.png"}/>
                </div>
                <div style={{marginBottom:40}}>
                    <img  style={{maxWidth:"100%", width:600}} src={"/influencer_example_1.png"}/>
                </div>
                <div>
                    <img  style={{maxWidth:"100%", width:600}} src={"/influencer_example_1.png"}/>
                </div>
                <div className="pt-4"/>
            </div>
            <div>
            <div className="container">
                <h1 className="text-center"><strong>A little more in-depth</strong></h1>
                <p className={"lead"}>
                    We want to make sure the post feels authentic and approachable, relaying to your followers that you in fact use this product in your daily routine. Whether it be with your morning coffee, or after your morning workout!
                </p>
            </div>
                <div className="bg-white text-dark mb-4">
                <div className="container">

            <Step
                Icon={FiClock}
                image={"/clocks_w_small.png"}
                step={"STEP 1"}
                title={"When Should I Post?"}
                text={"It's important to take into consideration the best times of the day to share, so you can capture the highest engagement. Most career influencers believe that a general rule to live by morning, noon and night, capitalizing on when people use their phones the most. Instagram's users are most active between 12pm and 1pm, Monday to Friday!"}
            />
                <Step
                    Icon={FiCamera}
                    image={"/photoshoot.svg"}
                    step={"STEP 2"}
                    reverse
                    title={"Set the Scene"}
                    text={" Creating a visually striking image for your followers is a great way to ensure engagement and interest. Every post should speak directly to your audience, knowing your demographic helps in creating the perfect photo. The below image is in the Flat Lay style it gives the end user the impression they are right there with you. You can toss a couple of gummies across the table and incorporate them in the image."}
                />
                <Step
                    Icon={FiMessageSquare}
                    image={"/bubble_w_small.png"}
                    step={"STEP 3"}
                    title={"Captions, captions, CAPTIONS"}
                    text={<>
                        <p>Once you have chosen what time you are going to post, create the perfect picture to capture your audience's attention you need to create a caption. Captions describe your post, they can be factual, comedic or playful. Goli will supply you with certain key terms for you to incorporate in your caption, in addition to your PROMO-CODE. Below are some key terms for our current campaign.</p>
                            <ul>
                            <li>Must use #GoliNutrition</li>
                            <li>#ACVGummies, #Tastetheapple #Paid</li>
                            <li>In the post, remember to encourage your followers to click the buy  now link (trackable link to be provided) in the caption to get the product at a discount price</li>
                            <li>Don't compare Goli Nutrition to any other ACV supplement</li>
                            <li>Don't use profanity or criticize the product or brand</li>
                            <li>Don't incorporate any other sponsored messages in the post</li>
                            <li>You must stipulate that this is a paid endorsement with Goli Nutrition</li>
                        </ul>

                    </>}
                />
                </div>

                </div>
            </div>
            <div className="">
            <section className={"container text-light"}>
                <div className="row">
                <div className="col-md-4 flex-fill-1">
                    <div className={"bg-info h-100 p-4"}>
                        <h2><strong>Promo-codes</strong></h2>
                        <p> Are the way in which we track your conversions/sales, in addition to the way you ensure you are receiving the 10% commission on the lifetime of your sales. You must make sure to let your audience know that the promo code is there to help them, by using your promo code at checkout they will receive a discount and without it they are paying full price! </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={"bg-info h-100 p-4"}>
                    <h2><strong>Trackable Links</strong></h2>
                    <p>Are the same as promo codes in that they allow you to give your audience a discount at the same time as capturing your 10% commission. Some influencers prefer to use a link over a promo code, its up to you to decide what you'd like, below you will find some examples!</p>
                    </div>
                </div>
                <div className={"col-md-4"}>
                    <div className={"bg-info h-100 p-4"}>
                    <h2><strong>Hashtags</strong></h2>
                    <p>Are used to organize and categorize themes, ideas and trending topics, they can be a very useful tool in capturing a much larger audience. When using a hashtag, your image or video will be added to a group of images, so anyone searching for #ACV or #tastetheapple will be able to scroll through and stumble upon your content!</p>
                    </div>
                </div>
                </div>

            </section>
                <div className="py-2"/>
            <section className="bg-info text-light p-4">
                <div className="row">
                    <div className="col-md-6 col-sm-4 text-center">
                        <img src="/insta_story_pic.jpg" style={{maxWidth:'100%'}} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-8">
                        <h2>How to Add Links to Your Instagram Stories</h2>
                        <Item number={1} Icon={FiClock} title={"Start Your Instagram Story"} description={"It's important to take into consideration the best times to start an Instagram story, take animate or video directly within the Instagram Stories app or swipe up on the Story's screen to import any image taken within the last 24 hours."}/>
                        <Item number={2} title={"Add the URL"} description={"To add a link to you story, click on the chain link at the top of your story, You'll be prompted to input the link destination of your choice in a new window. Paste the promo link you copied from you Goli portal and tap on the Done to the link. Once you've added your link the the story, the chain link icon will be highlighted to indicate that you story now has a link. Continue editing you store and include text, stickers, and add filters to your stories."}/>
                        <Item number={3} title={"Add a Call to Action to your Story"} description={"The link button on Instagram stories is not obvious to the users, so its important to let your followers know that there is more to your Instagram Stories. The last and perhaps most important step, is to include a call to action in your story to direct users to the Goli website. Some of the common call to actions are See More or Swipe Up."}/>
                        <Item number={4} title={"Check Your Work"} description={"Once you have created your image and believe you have included everything you needed to, provide your dedicated rep a draft post. We we'll get back to you within the hour to let you know if that post is good to go, or if there's room for improvement!"}/>
                    </div>
                </div>
            </section>
                <div className="bg-white text-dark">
                    <section className={"container"}>
                    <div className="my-4 p-4">
                    <h2 className={"mb-4"}><strong>Posting a Video VS. Story</strong></h2>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h5><strong>Videos</strong></h5>
                            <p>Videos are more interactive, it gets your audience more involved and you can have more of a conversation about why you love Goli Gummies. For example, why choosing Goli over the more traditional methods of ACV....well the taste is AMAZING. The draw back to video's unless pinned to your account, is that they expire after 24 hours. It is important to consistently post videos about the product if you find your commissions are not coming in as fast as you'd like. </p>
                        </div>
                        <div className="col-md-4">
                            <h5><strong>Pictures</strong></h5>
                            <p>Pictures never die! The reason we ask for a picture post in addition to a story is because it will always be live on your Instagram feed. Your picture posts will help new followers that organically find you, learn about Goli ACV Gummies and how they can grab your promo code and get a discount on their order. It's very valuable for you to have picture posts, with your promo code in the caption, remember you can capture 10% of the lifetime of all your sales!
                            </p>
                        </div>
                        <div className="col-md-4">
                            <strong>So, when trying to decide what type of post you want to do today, ask yourself, do you have time to create a short video for your story? Have you already posted your picture post for that month's campaign? These are all questions to consider prior to posting.</strong>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
                <section className={"container p-4"}>
                    <h2><strong>Once that step is complete,</strong></h2>
                    <h2><strong>There is only one thing left to do...</strong></h2>
                    <div className="text-center my-4">
                        <img src={"/post_it.png"} style={{maxWidth:600, width:'100%'}} />
                    </div>

                    <h4>We can't wait to see what you come up with, we hope to see you on this week's top performers soon!</h4>
                    <h4>If you have any further questions or concerns, please do not hesitate to reach out to your dedicated rep</h4>

                </section>
            </div>
            <DashboardFooter />
        </DashboardContainer>
    );
}
function Point({number, children}){
    return <div className={"d-flex align-items-center my-4"} style={{fontSize:18}}>
        <span style={{width:36, height:36, borderRadius:18}} className={"mr-3 bg-dark text-light d-flex align-items-center justify-content-center"}>{number}</span>
        {children}
    </div>
}

function Card({src, title, Icon, description, noBorder}){
    return  <div className={`col-lg-3 col-md-6 text-dark text-center`}>
        <div className="text-center p-4">
            <Icon style={{fontSize:64}} />
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
                 className={"d-flex mr-2 align-items-center justify-content-center bg-white text-dark text-center"}>{number}</div>
            <h4><strong>{title}</strong></h4>
        </div>
        <p style={{marginLeft:64}}>{description}</p>

    </div>
}
function Step({reverse, image, step, title, text, Icon}){
    return  <div className={`row mt-4 py-4 ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="col-md-auto text-center">
            <Icon style={{width:150, height:150}} />
        </div>
        <div className="col">
            <Badge text={step} />
            <h3 className={"my-3"}><strong>{title}</strong></h3>
            <p>{text}</p>
        </div>
    </div>
}
function Badge({text}){
    return <span style={{letterSpacing:3}}>{text}</span>
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
