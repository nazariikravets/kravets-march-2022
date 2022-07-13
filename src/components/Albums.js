import React, {useEffect, useState} from 'react';

import ApiService from "../services/get.info.api";
import Album from "./Album";


const Albums = () => {
    let apiService=new ApiService('albums')
    const [albums,setAlbums]=useState([])

    useEffect(()=>{
        apiService.getAll().then(value=>setAlbums(value))
    },[])

    return (
        <div>
            {albums.map(value => <Album item={value} key={value.id}/>)}


        </div>
    );
};

export default Albums;