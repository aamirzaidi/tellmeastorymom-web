import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useHistory } from 'react-router-dom';
import db from "../../firebase";
import CategoryCard from '../homepage/body/Category Carousel/categoryCard';
import { Grid } from "@material-ui/core";

function Diary() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);

  const ref = db.collection('Stories');

  function getStories() {

    setLoading(true);
    ref.where('related', 'array-contains', 'Diary').get().then((querySnapshot) => {
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

  if (loading) {
    return <h1>Loading...</h1>
  }

  function createDiary(story, index) {
    return (
      <Grid item lg = {4} xs = {12} sm = {6}> 
      <CategoryCard
        key={index}
        id={story.id}
        title={story.title}
        content={story.content.substring(0, 200)}
        storyImageURL={story.storyImageURL}
        author={story.author}
        posted={story.posted}
        onClick={() => { history.push("/storypage/" + `${story.id}`) }}
      />
      </Grid>
    );
  }

  const breakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },

  ]

  return (
    <>
    <div className="d-bottom">
      <h1 className="mompreneurPadding-top mompreneurPadding-left">Diary</h1>
      <Grid  container spacing ={3}> 
        {stories.map((story, index) => createDiary(story, index))}
        </Grid>
      </div>
    </>
  );
}


export default Diary;