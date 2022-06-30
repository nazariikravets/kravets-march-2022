import {useState} from "react";

import {getPostsUser} from "./services";
import {Post, Users} from "./components";



function App() {

    let [postUser, setPostUser] = useState([])

    const getUserPosts = (id) => {
        getPostsUser(id).then(({data}) => setPostUser([...data]))
    }


    return (
        <div>
            {
                postUser.map(value => <Post key={value.id} item={value}/>)
            }

             <Users getUserPosts={getUserPosts}/>

        </div>
    );
}

export default App;
