import React, {useEffect, useState} from 'react';

import Todo from "./Todo";

import ApiService from "../services/get.info.api";


const Todos = () => {
    let apiService=new ApiService('todos')
    const [todos,setTodos]=useState([])

    useEffect(()=>{
        apiService.getAll().then(value=>setTodos(value))
    },[])
    return (
        <div>
            {
                todos.map(value => <Todo item={value} key={value.id}/>)
            }

        </div>
    );
};

export default Todos;