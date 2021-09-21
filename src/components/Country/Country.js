import React from 'react';
import './Country.css'
const Country = (props) => {

    // Distrcring 

    const {name,population,flag,region} = props.country


    return (
        <div className="country bg-warning">
           
        <h4 className="text-success"> This is:  {name} </h4>
        <h3>Population {population}</h3>
        <img src={flag} alt="" />
        <p>  Region : {region} </p>

        </div>
    );
};

export default Country;