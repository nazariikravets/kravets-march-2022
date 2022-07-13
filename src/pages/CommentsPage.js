import React from 'react';
import {Outlet} from 'react-router-dom'

import Comments from "../components/Comments";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>

        </div>
    );
};

export default CommentsPage;