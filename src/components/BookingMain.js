import React from "react";
import { Link } from "react-router-dom";

// const BookingMain = () =>{
function BookingMain() {    
    // console.log("... in booking main ....");
    return(       
        <div className="bookmain">
            <img className="logo" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8s_TuRghdOkHYpHAFb7-wzlbq9LwSPN1zQ&usqp=CAU" width={"75px"} height={"80px"}/>
            
            <div className="wrapper">                
            <nav className="nav">          
                <div className="flight">                 
                     <Link to={"/flight"}><img className="logoimg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OLi0lcwT-EYX7FGossR72lQBxT3OobuRLQ&usqp=CAU" width={"50px"} height={"45px"}></img>Flights</Link>
                </div>
                <div className="hotel">                
                    <Link to={"/hotel"}><img className="logoimg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHi_Biwob7v-gddM6Kn1jXQA51puRq9vBi-5CU9geRxR9HX_WCOeWLQRHF_ahgIKvic8&usqp=CAU" width={"50px"} height={"45px"}></img>Stays</Link>               
                </div>            
            
                <div className="login">            
                    <Link to={"/login"}><img className="logoimg" title="Login" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfGSggwFbL_tGJapAh9zSf_EWJQvEMCXcaw&usqp=CAU" width={"50px"} height={"45px"}/>Login</Link>
                </div>
                <div className="plane-move">                
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jdoNQUh1uJk4D6IIK29B3XYtpow2Tt5QHkitWfLC1xlc0ciShR6oQSK3r19di5JKEbs&usqp=CAU"width={"110"} />
                </div>
                <div>
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntfzZO293qpoT-dMSN3057uotrC_lnFYmig&usqp=CAU" width={"110"} />
                </div>            
            </nav>            
            </div>
        </div>           
    )
}
export default BookingMain;