import db from "./firebase";
import React,{useEffect,useState} from "react";

// const notes=[];
// let k=0;

// db.collection('Stories').get().then((snapshot)=>{
//   if (snapshot.docs.length > 0) {
//   snapshot.docs.forEach((doc)=>{
//     const data={
//     key:k++,  
//     title:doc.title,
//     content:doc.content,
//     author: doc.author
//     }
     
//      notes.push({...data});
//      console.log(notes);
//   })
// }else{
//   console.log("nothing to display");
// }
// })


const notes = [
  {
    key: 1,
    title: "Delegation",
    content:
      "Q. How many programmers "
  },
  {
    key: 2,
    title: "Loops",
    content:
      "How to keep a ."
  },
  {
    key: 3,
    title: "Arrays",
    content:
      "Q. Why did t"
  },
  {
    key: 4,
    title: "Hardw Software",
    content:
      "What's the."
  }
];

export default notes;
