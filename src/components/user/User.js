import React from 'react';

const User = ({item,getUserPosts}) => {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>getUserPosts(item.id)}> User Posts</button>
        </div>


    );
};

export {User};