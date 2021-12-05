import React from "react";
import {useHistory} from "react-router-dom";

function TopStoryCard(props){

  const history = useHistory();

  return(
    <div className="card mb-3 topStoryCard ">
  <div className="row no-gutters">
    <div className="col-md-6">
      <img src= {props.storyImageURL} className="top-carouse-image" alt= {props.title} />
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h3 className="card-title top-card-padding">{props.title}</h3>
        <p  className="card-text ">{props.content.substring(0,500).replaceAll("\\n","\n")} 
          <strong>
            <em  className = "hand" onClick={() => {history.push("/storyData?id="+`${props.id}`)}} color= "blue">Read More</em>
          </strong>
        </p>
        <p className="card-text"><small>{props.posted}</small></p>
        <p className="card-text"><small className="text-muted">{props.author}</small></p>
      </div>
    </div>
  </div>
</div>
  );
}

export default TopStoryCard;
