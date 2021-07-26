import React from "react";
import { Link } from 'react-router-dom';
import client from "../../images/client.jpg"
function About() {
    return (
        <>
            <h1 className="explore-more-categories-padding-bottom-top">About</h1>
            <p className="about-font">Hello, welcome to Tellmeastorymom.com.</p>
            <p className="about-font">I am Sweta, founder of Tellmeastorymom.com.</p>
            <p className="about-font">Currently, I am living in Singapore with my Husband and a cute little daughter.</p>
            <p className="about-font">I am an IT professional and currently working in Singapore. My roots are from a small city in Madhya Pradesh (India).</p>
            <p className="explore-more-categories-padding-bottom-top about-font">Tellmeastorymom.com is my passion. I started it as my hobby in December 2016, but now it’s like my second child.</p>
            <p className="about-font">My daughter is the inspiration behind this site.</p>
            <p className="about-font">Because of her, I realized that stories play an important role in the overall development of a child.</p>
            <p className="about-font">If you have good and meaningful story for a certain topic, then your child will learn that topic very easily.</p>
            <p className="explore-more-categories-padding-bottom-top about-font">But to have stories on your fingertips is also very difficult, because we have lots of other things in our mind, so it’s really difficult to recall all the stories when your little one want you to narrate.</p>
            <p className="about-font">So here I come up with the idea of Tellmeastorymom.com as a solution for all those mothers (fathers too) who struggle to find an apt story for their little one.</p>
            <p className="about-font">It’s an online platform to share short and sweet stories for kids and teens.</p>
            <p className="explore-more-categories-padding-bottom-top about-font">Here you can get category wise stories. For ex, if you want to narrate stories related to hard work, honesty or any other value, then you can select it as a category and then can narrate stories under that category to your child.</p>
            <p className="about-font">It has stories from various sources like Panchatantra, puran, mythology (like Mahabharata, Ramayana), etc.</p>
            <p className="explore-more-categories-padding-bottom-top about-font">Here you can also share your stories by clicking on the following link :</p>
            <div className="container note col explore-more-categories-padding-bottom-top mompreneurPadding-left">
                <h3 className="about-color">Submit a story</h3>
                <p className="s-color explore-more-categories-padding-bottom-top">This page is dedicated to all the writers (any age group) who wants to share their stories.</p>
                <p className="explore-more-categories-padding-bottom-top s-color">Everybody has a story , if you have any story or if there is any story which has touched your life then please share it with all the readers.</p>
                <p className="explore-more-categories-padding-bottom-top s-color">(Note : story should be original or incase you are submitting an existing story then please mention the source and its writer’s name. Story should have some message. Please proofread before submitting.)</p>
                <p className="explore-more-categories-padding-bottom-top s-color">Happy Writing and Enjoy Reading 🙂 🙂</p>
                <Link className="nav-link" to="/addStory"><button className="btn-primary about">Submit Your Story</button>
                </Link>

            </div>
            <p className="about-font">Please subscribe to get the latest stories via email .</p>

            <p className="about-font">Like and follow us on social media to get the latest updates.</p>



            <p className="explore-more-categories-padding-bottom-top about-font">Thank you so much for stopping by here.</p>
            <img className = "login-padding" src={client} />     
      
        </>
    );
}

export default About;