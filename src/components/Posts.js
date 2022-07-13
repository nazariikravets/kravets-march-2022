import React, {useEffect, useState} from 'react';
import ApiService from "../services/get.info.api";
import Post from "./Post";

const Posts = ({id}) => {
    let apiService=new ApiService('posts')
    const [post,setPost]=useState([])
    useEffect(()=>{
        apiService.getSingle(id.id).then(value=>setPost(value))
    },[id])
    return (
        <div>
            {
                <Post item={post}/>
            }

        </div>
    );
};

export default Posts;