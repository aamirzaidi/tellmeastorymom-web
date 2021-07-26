import React , {useState, useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import TopStoryCard from "./topStoryCard";
import db from "../../../../firebase";

function TopCarousel() {
const [loading, setLoading] = useState(false);
const [stories, setStories] = useState([]);

const ref = db.collection('Stories');

function getStories(){
  setLoading(true);
  ref.limit(5).onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((story) => {
      let storyData = story.data();
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
  return <h1>Loading...</h1>
}

function createNotes(story,index){
    return(       
    <TopStoryCard
      key={index}
      id = {story.id}
      title={story.title}
      content={story.content}
      storyImageURL = {story.storyImageURL}
      author = {story.author}
      posted = {story.posted}
      />     
    );
  }

  const breakpoint = [{
    width:550,
    itemsToShow: 1
  },] 

      return (
        <Carousel viewport className=".rec.rec-slider-container"
        breakPoints={breakpoint}
        itemPadding={[0, 0]}
        enableAutoPlay={true}
        focusOnSelect={true}
        transitionMs = {1000}
        autoPlaySpeed= {8000}
        pagination ={false}
        showArrows={false}
        >
         {stories.map((story,index) => createNotes(story, index))} 
         </Carousel>
      ); 
  }


export default TopCarousel;