import React from 'react';
import {useParams} from "react-router-dom";
import Posts from "../components/Posts";

const PostPage = () => {
    let id= useParams()
    return (
        <div>
            <Posts id={id}/>



        </div>
    );
};

export default PostPage;