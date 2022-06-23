import React from 'react';

const Characters = (props) => {
  const {name, desc, img, alt}=props;
    return (
        <div>
            <h2>{name }</h2>
            <div>{desc}</div>
            <img src={img} alt={alt}/>

        </div>
    );
};

export default Characters;