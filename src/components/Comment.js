import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({item}) => {
    return (
        <div>
            <div><Link to={item.postId.toString()}>{item.body}</Link></div>
            <hr/>

        </div>
    );
};

export default Comment;