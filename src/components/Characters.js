import React from 'react';

const Characters = (props) => {
    const {id,name,status,species,gender,image,alt}=props
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img src={image} alt={alt}/>


        </div>
    );
};

export default Characters;