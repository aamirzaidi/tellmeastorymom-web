import React from 'react'
import CommentCard from './CommentCard'

function CommentsList(props) {

    function createComment(commentData, index){
        return <CommentCard 
            key = {commentData.id}
            commentBy = {commentData.commentBy}
            postedOn = {commentData.postedOn}
            content = {commentData.content}
            ratingStars = {commentData.ratingStars}
        />
    }

    return (
        <div className = "comment_list">
            <h3>Comments</h3>
            {props.comments.map((commentData , index) => createComment(commentData, index))}
        </div>
    )
}

export default CommentsList
