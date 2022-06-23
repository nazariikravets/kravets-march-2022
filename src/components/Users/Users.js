import React, {useEffect, useState} from 'react';
import {UserDetails} from "../userDetails/UserDetails";
import {User} from "../User/User";




const Users = () => {
    const [users,setUsers]= useState([])
    const [user, setUser]=useState(null)

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(value => value.json())
          .then(value =>setUsers(value) )
    },[])

    const detailsButton=(item)=>{
        setUser(item)

    }


    return (
        <div>
            {
                user && <UserDetails user={user}/>
            }
            {
                users.map(user =><User
                    key={user.id}
                    item={user}
                    detailsButton={detailsButton}
                /> )
            }

        </div>
    );
};

export {Users};