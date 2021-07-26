import React from 'react';
import Carousel from 'react-elastic-carousel';
import CategoryCard from "./categoryCard";
import { useHistory } from "react-router-dom";

 function CategoryCarousels(props) {

  const breakpoint = [
    { width: 1,itemsToShow: 1},
    { width: 550,itemsToShow: 2},
    { width: 668,itemsToShow: 3}
  ]

  const history = useHistory();
  function createStories(story, index){
    return(
    <CategoryCard
      key={index}
      id={story.id}
      title={ story.title}
      content={story.content}
      date= {story.posted}
      author= {story.author}
      storyImageURL={story.storyImageURL}
      onClick={() => {
        history.push("/storypage/"+`${story.id}`)
        }}
      />     
    );
  }
   
  return (
      <div className="d-bottom">
      <h2 className="categoryNamePadding d-name ">{props.categoryName}</h2>
        <Carousel 
          className="container-fluid"
          breakPoints={breakpoint}
          enableAutoPlay={true}
          showEmptySlots={false}
          focusOnSelect={true} 
          autoPlaySpeed = {4000}
          showArrows = {false}
          >

          {props.storyObject.map((story, index) => createStories(story, index))} 

        </Carousel>
      </div>             
    );    
  }

export default CategoryCarousels;