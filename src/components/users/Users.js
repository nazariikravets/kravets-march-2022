import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services";
import {User} from "../user/User";



const Users = ({getUserPosts}) => {
    let [users, setusers] = useState([])
    useEffect(() => {
        getUsers().then(({data})=>setusers([...data]))
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} getUserPosts={getUserPosts} item={value}/>)
            }

        </div>
    );
};

export {Users};