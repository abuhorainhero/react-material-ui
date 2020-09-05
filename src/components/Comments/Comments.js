import React from 'react';
import './Comment.css'

const Comments = (props) => {
    const {name, email, body,postId} = props.comment;

    return (
        <div className='comment-container'>
            <div className='img-container'>
                <h1>hi {postId}</h1>
            </div>
            <div className='text-container'>
                <h4>Name : {name}</h4>
                <h6>Email : {email}</h6>
                <p><b>Caption :</b> {body}</p>
            </div>
        </div>
    );
};

export default Comments;