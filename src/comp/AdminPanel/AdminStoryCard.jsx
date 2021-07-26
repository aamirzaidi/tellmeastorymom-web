import React from 'react'

function AdminStoryCard(props) {
    return(
        <div className="card-group categoryCard">
        <div className="card">
          <img src={props.storyImageURL} className="card-img-top" alt="..." height="200" width="200"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"><small >{props.date}</small></p>
            <p className="card-text"><small className="text-muted">{props.author}</small></p>
            <button onClick = {props.onEditCall}> Edit </button>
            <button onClick = {props.onDeleteCall}> Delete </button>
          </div>
          <div>
            </div>
        </div>
        </div>
    );
}

export default AdminStoryCard
