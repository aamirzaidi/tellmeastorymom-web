import React from "react";

function CategoryCard(props){

    return(
        <div className="card-group categoryCard" onClick={props.onClick}>
        <div className="card">
          <img src={props.storyImageURL} className="card-img-top" alt="..." height="200" width="200"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content.substring(0,100).replaceAll("\\n","\n")}</p>
            <p className="card-text"><small >{props.date}</small></p>
            <p className="card-text"><small className="text-muted">{props.author}</small></p>
          </div>
          <div>
            </div>
        </div>
        </div>
    );
}

export default CategoryCard;