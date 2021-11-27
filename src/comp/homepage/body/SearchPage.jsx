import React, {useState} from "react";
import { useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import db from "../../../firebase";
import { Grid } from "@material-ui/core";
import CategoryCard from "./Category Carousel/categoryCard";
import LoadingIndicator from "../../LoadingIndicator";


function Search() {
    const { searchTerm } = useParams();
    const history = useHistory();
    const [searchedStories, setSearchedStories] = useState([]);
    const [loading, setLoading] = useState(true);

    function isLowerCase(ch) {
        if (ch == ch.toLowerCase()){
            return true;
        }else {
            return false;
        }
     }

    async function getSearchedStories() {
        const ref = db.collection('Stories');
        await ref.get().then((querySnapshot) => {
           const items = [];
           querySnapshot.forEach((story) => {
                  let storyData = story.data();
                  if(storyData.title.toLowerCase().includes(searchTerm.toLowerCase()) || storyData.content.toLowerCase().includes(searchTerm.toLowerCase())){
                    storyData.id = story.id;
                    items.push(storyData);
                  }
         });
         setSearchedStories(items);
         console.log(searchedStories);
        });
        
        setLoading(false);
    }

useEffect(() => {
    getSearchedStories();
 },[]);

 if(loading){
     return <LoadingIndicator />
 }

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
            onClick={() =>  {history.push("/storypage/"+`${story.id}`)}}
            />   
            </Grid>
    );
  }

    return (
        <div>
            {searchedStories.length ===0 ? 
            <h3>No stories found with "{searchTerm}", Try a different search!</h3> 
            :
            <>
            <h2> {searchTerm}</h2>        
            <Grid  container spacing ={3}> 
            {searchedStories.map((story , index) => createStories(story , index))}
            </Grid>
            </>
            } 
        </div>
    );
}
export default Search;