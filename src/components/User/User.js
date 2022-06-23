import React from 'react';

const User = ({item, detailsButton}) => {
    return (
        <div>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <button onClick={()=>detailsButton(item)}>details</button>

        </div>
    );
};

export {User};