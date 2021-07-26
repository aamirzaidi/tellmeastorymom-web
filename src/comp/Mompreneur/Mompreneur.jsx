import React from "react";

function Mompreneur(props){

     return(
         <div class="card-group categoryCard" onClick={props.onClick}>
          
         <div class="card">
           <img src={props.storyImageURL} class="card-img-top" alt="..." height="200" width="200"/>
           <div class="card-body">
             <h5 class="card-title">{props.title}</h5>
             <p class="card-text">{props.content}</p>
             <p class="card-text"><small >{props.date}</small></p>
             <p class="card-text"><small class="text-muted">{props.author}</small></p>
           </div>
           <div>
             </div>
         </div>
         </div>
     );
 }
 

export default Mompreneur;