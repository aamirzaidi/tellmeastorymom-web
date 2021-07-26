import React , {useState, useEffect} from 'react';
import  {useHistory} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import db from "../../firebase";
import CategoryCard from '../homepage/body/Category Carousel/categoryCard';
import LoadingIndicator from '../LoadingIndicator';

function Interview() {
  const history = useHistory();
const [loading, setLoading] = useState(false);
const [stories, setStories] = useState([]);

const ref = db.collection('Stories');

function getStories(){
  setLoading(true);
  ref.limit(5).where('related','array-contains','Interview').onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((story) => {
      const storyData = story.data();
      storyData.id = story.id;
      items.push(storyData);
      console.log(story.data().title);
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
         
    <CategoryCard
      id={story.id}
      key={index}
      title={story.title}
      content={story.content.substring(0,200)}
      storyImageURL = {story.storyImageURL}
      author = {story.author}
      posted = {story.posted}
      onClick={() =>  {history.push("/storypage/"+`${story.id}`)}}
      />     
    );
  }

  const breakpoint = [
    { width: 1,itemsToShow: 1},
    { width: 550,itemsToShow: 3},

  ]

      return (
          <> 
       <div className="d-name">
         <h1 className="mompreneurPadding-left">Interview</h1>
        <Carousel viewport
        breakPoints={breakpoint}
        showArrows={false}
        enableAutoPlay={true}
        focusOnSelect="true"
        transitionMs = "1000"
        autoPlaySpeed= "5000"
        >
         {stories.map((story,index) => createInterview(story, index))} 
         </Carousel>
         </div>
         </>
      ); 
  }


export default Interview;