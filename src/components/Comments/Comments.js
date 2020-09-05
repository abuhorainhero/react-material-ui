import React, { useState } from 'react';
import './Comment.css'
import imagesInfo from '../../FackData/index';
import Image from '../Image/Image';

const Comments = (props) => {
    const [image, setImage] = useState(imagesInfo);
    const {name, email, body, id, postId} = props.comment;

    return (
        <div className='comment-container'>
            <div className='img-container'>
                <Image id={id} image={image}></Image>
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