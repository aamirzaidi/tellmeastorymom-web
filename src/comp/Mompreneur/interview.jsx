import React , {useState, useEffect} from 'react';
import  {useHistory} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import db from "../../firebase";
import CategoryCard from '../homepage/body/Category Carousel/categoryCard';
import LoadingIndicator from '../LoadingIndicator';
import { Grid } from "@material-ui/core";

function Interview() {
  const history = useHistory();
const [loading, setLoading] = useState(false);
const [stories, setStories] = useState([]);

const ref = db.collection('Stories');

function getStories(){
  setLoading(true);
  ref.where('related','array-contains','Interview').onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((story) => {
      const storyData = story.data();
      storyData.id = story.id;
      items.push(storyData);
      
    });
  setStories(items);
  setLoading(false);
  });
}

useEffect(() => {
  getStories();
}, [])

if(loading) {
  return <LoadingIndicator />
}

function createInterview(story,index){
    return(  
    <Grid item lg = {4} xs = {12} sm = {6}> 
    <CategoryCard
      id={story.id}
      key={index}
      title={story.title}
      content={story.content.substring(0,200)}
      storyImageURL = {story.storyImageURL}
      author = {story.author}
      posted = {story.posted}
      onClick={() => {
        history.push("/storyData?id="+`${story.id}`)
      }}
      />  
      </Grid>   
    );
  }

  const breakpoint = [
    { width: 1,itemsToShow: 1},
    { width: 550,itemsToShow: 3},

  ]

      return (
          <> 
       <div className="d-name">
         <h1 className="mompreneurPadding-top mompreneurPadding-left">Interview</h1>
         <Grid  container spacing ={3}> 
          {stories.map((story,index) => createInterview(story, index))} 
            </Grid>
         </div>
         </>
      ); 
  }


export default Interview;