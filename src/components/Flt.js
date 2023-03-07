import React from "react";
import FlightDetails from "../data/flightDetails";
import Search from "../components/Search";

function Flight(){
    return(           
            <Search details={FlightDetails}/>       
    )
}
export default Flight;