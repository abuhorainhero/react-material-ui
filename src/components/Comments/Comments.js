import React, { useState } from 'react';
import './Comment.css'

const Comments = (props) => {
    const {name, email, body, id} = props.comment;

    return (
        <div className='comment-container box-comment'>
            <div className='img-container'>
                <img src={`https://randomuser.me/api/portraits/med/men/${id}.jpg`} alt=""/>
            </div>
            <div className='text-container'>
                <h6>{email}</h6>
                <h4>{name}</h4>
                <p><b>Caption :</b> {body}</p>
            </div>
        </div>
    );
};

export default Comments;