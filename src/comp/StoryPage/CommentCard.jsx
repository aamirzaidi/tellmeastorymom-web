import React from 'react';
import Stars from 'simple-rating-stars';

function CommentCard(props) {

    return (
        <div className = "d-box">
        <Stars
            stars={Math.floor(props.ratingStars)}
            outOf={5}
            full={'#d00'}
            empty={'#E1F1FF'}
            stroke={'#369'}
        />
        <h5>By {props.commentBy}</h5>
        <h6>Dated {props.postedOn}</h6>
        <p>{props.content}</p>
        </div>
    )
}

export default CommentCard
