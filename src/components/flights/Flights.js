import React, {useEffect, useState} from 'react';
import {Flight} from "../flight/Flight";

const Flights = () => {

const [flights,setFlights ]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFlights(value))
    },[])


    return (
        <div>
            {
                flights.filter(fligt=>fligt.launch_year <2020).map(fligt=><Flight key={fligt.flight_number} item={fligt}/>)
            }

        </div>
    );
};

export {Flights};