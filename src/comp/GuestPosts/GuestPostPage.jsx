import { Grid } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import db from "../../firebase";
import CategoryCard from "../homepage/body/Category Carousel/categoryCard";
import LoadingIndicator from "../LoadingIndicator";

function GuestPostPage() {
    const [guestStories, setGuestStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    async function getGuestStories(){
        await db.collection('Stories')
            .where("author","!=","By Tellmeastorymom").get().then((querySnapshot) => {
                const items = []; 
                querySnapshot.forEach((story) => {
                    const data = story.data();
                    data.id = story.id; 
                    items.push(data);
            });
            setGuestStories(items);
        });
        setLoading(false);
    }

    useEffect(() => {
        getGuestStories();
    },[]);

    function createStories(story, index){
        return( <Grid item lg = {4} xs = {12} sm = {6}>
                    <CategoryCard
                    key={index}
                    id={story.id}
                    title={ story.title}
                    content={story.content}
                    date= {story.posted}
                    author= {story.author}
                    storyImageURL={story.storyImageURL}
                    onClick={() => {
                        history.push("/storyData?id="+`${story.id}`)
                    }}
                    />     
                </Grid>
                );
            }

    if(loading){
        return <LoadingIndicator />
    }        

    return (
        <div>
            <Grid  container spacing ={3}> 
                {guestStories.map((story , index) => createStories(story , index))}
            </Grid>
        </div>
    )
}

export default GuestPostPage
