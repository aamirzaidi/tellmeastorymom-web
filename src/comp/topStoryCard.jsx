import React from "react";

function TopStoryCard(props){
  return(
    <div class="card mb-3 topStoryCard">
  <div class="row no-gutters">
    <div class="col-md-6">
      <img src= {props.storyImageURL} class="top-carouse-image" alt= {props.title} />
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h3 class="card-title">{props.title}</h3>
        <p class="card-text">{props.content.substring(0,500).replaceAll("\\n", "\n")} <strong><em color= "blue">Read More</em></strong> </p>
        <p class="card-text"><small>{props.posted}</small></p>
        <p class="card-text"><small class="text-muted">{props.author}</small></p>
      </div>
    </div>
  </div>
</div>
  );
}

export default TopStoryCard;
