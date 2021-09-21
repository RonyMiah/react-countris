import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countris.css'


const Countris = () => {
    const [countris,setCountris] = useState([]);
    console.log(countris)
    useEffect( () =>{

        fetch('https://restcountries.eu/rest/v2/all')
        .then(res =>res.json())
        .then(data => setCountris(data));

    } , [])
    return (
        <div >
            <h1> Welcome  To All  Countris : {countris.length}</h1>
           <div className="countris-container">
           {
                countris.map(country => <Country 

                    key={country.population}
                    
                    country={country} 
                     ></Country>)
            }
           </div>
        </div>
    );
};




export default Countris;