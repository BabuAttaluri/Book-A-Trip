import React from "react";
import hotelDetails from "../data/hotelDetails";
import Searchh from "./hotels/Searchh";

const Hotel = ()=>{
// function Hotel(){
    return(
        <div>
            <Searchh details={hotelDetails}/>
        </div>
    )
}
export default Hotel;