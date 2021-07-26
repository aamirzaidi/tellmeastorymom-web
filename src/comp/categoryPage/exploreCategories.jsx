import React, { useState,useEffect } from "react";
import db from "../firebase";


function ExploreCategories(){
    const ref = db.collection('categories');
    const [values,setValues]=useState([]);
    const [userSelected,setUserSelected]=useState("");
    function handleChangeU(event){
        setUserSelected(event.target.value);
        console.log(userSelected);
    }


    function getList(){
        return ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((dropdownValues) =>{
              items.push(dropdownValues.data().categoryName);
              
            }); 
            
            setValues(items);
            console.log(values);
            
         
        });
    }

    useEffect(() => {
        getList();
      }, [])




    function createOptions(index){
      
        return(
       
         <option key={index} value={index}>{index}</option>
        );
     }
 

    return(
        <center>
        <div class="form col-sm-4">
        <label class="visually-hidden" for="autoSizingSelect">Category</label>
        <select onChange={handleChangeU}class="col form-select" id="autoSizingSelect">
            <option selected>Choose...</option>
            {values.map((index) => createOptions(index))} 
            
        </select>
    </div>
    </center>
    );
}




export default ExploreCategories;