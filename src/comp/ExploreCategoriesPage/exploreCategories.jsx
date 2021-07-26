import { Grid } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import db from "../../firebase";
import CategoryCard from "../homepage/body/Category Carousel/categoryCard";


function ExploreCategories(){
    const [categories,setCategories]=useState([]);
    const [userSelected,setUserSelected]=useState("");
    const [categoryStories,setCategoryStories] = useState([]);
    const history = useHistory();
    
    function handleCategoryChange(event){
        setUserSelected(event.target.value); 
    }

   async function getCategoriesDropdownList(){
        await db.collection('categories').onSnapshot((querySnapshot)=> {
            const items = [];      
            querySnapshot.forEach((dropdownValues) =>{
              items.push(dropdownValues.data().categoryName);    
            }); 
            
            setCategories(items);           
        });       
    }

  async function getCategoryStories(){
      if(userSelected.length != 0){
        await db.collection('Stories').where('related', 'array-contains', userSelected).get().then((querySnapshot) => {
            const items = [];
                querySnapshot.forEach((story) => {
                   const data = story.data();
                   data.id = story.id; 
                   items.push(data);
          });
          setCategoryStories(items);
          console.log(categoryStories)
         });
      }
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

    useEffect(() => {     
        getCategoriesDropdownList();       
      }, [])
 
    useEffect(() => {
        getCategoryStories();
      }, [userSelected])


    function createOptions(index){
        return(
         <option key={index} value={index}>{index}</option>
        );
     }
 
    return(
        <>
        <center className ="login-padding">
        <div className="form col-sm-4">
        <label className="visually-hidden" >Category</label>
        <select onChange={handleCategoryChange} defaultValue={'DEFAULT'} className="col form-select" id="autoSizingSelect">
            <option value="DEFAULT" disabled>Select A Category...</option>
            {categories.map((index) => createOptions(index))}     
        </select>
    </div>
    </center>  

    <center> <h1>{userSelected}</h1></center>
        <Grid  container spacing ={3}> 
            {categoryStories.map((story , index) => createStories(story , index))}
        </Grid> 
    </>
    );
}
export default ExploreCategories;