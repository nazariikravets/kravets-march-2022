import React, {useEffect, useState} from 'react';
import ApiService from "../services/get.info.api";

import Comment from "./Comment";

const Comments = () => {
    let apiService=new ApiService('comments')

    const [comments,setComments]=useState([])
    useEffect(()=>{
        apiService.getAll().then(value=>setComments(value))
    },[])
    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Comments;