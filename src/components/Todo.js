import React from 'react';

const Todo = ({item}) => {
    return (
        <div>

            <div>{item.id}</div>
            <div>{item.title}</div>
            <hr/>
        </div>
    );
};

export default Todo;