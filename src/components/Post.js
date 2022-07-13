import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.body}</div>
            <hr/>
            <hr/>
        </div>
    );
};

export default Post;