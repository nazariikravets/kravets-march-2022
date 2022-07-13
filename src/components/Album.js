import React from 'react';

const Album = ({item}) => {
    return (
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <hr/>

        </div>
    );
};

export default Album;