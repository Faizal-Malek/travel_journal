import React from "react";
import Card from "./card";
import Data from "./Data";

export default function Journal()
{
    const data = Data.map( details => {
        return <Card Location = {details.Location} site = {details.site} date = {details.Date} description = {details.description} googleMap= {details.googleMap} image ={details.image}/>
    });
    
    return (

        <>

        {data}

        </>
    )
}