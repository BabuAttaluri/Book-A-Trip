import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import hotelDetails from "../data/hotelDetails";
import "./Checkout1.css";
function Checkout(){
    const navigate = useNavigate();   
    function handleClick(){
        alert("booked successfully")
        navigate("/BookingMain");
    }
    // console.log("===== in Checkout page =======");
    return(      
        <div>  
            <div className='wrapper'>
                <h1>Check-out Details</h1>
                <div className='wrapper1'>
        <div className="tchk-wrap">
        {/* <div className="tchk"> */}
        <div className='card-info'>
        {/* <div className='tchk-in'>      
        <h3> Fare Summary</h3>
        <p className='para'>Price</p>        
        <h2>price: {hotelDetails.price_per_night}</h2>
        <hr></hr>
        <p className='para'>Fee & Surcharge</p>
        <h2>{hotelDetails.hotel_name}</h2>
        <hr></hr>
        <p className='para'>Total Amount</p>
        <h2>{hotelDetails.check_in}</h2>
        <hr></hr>
        </div> */}
        <h3> Payment Method</h3>
        <div className='radio-container'>
              <input
                id='card'
                name='payment-type'
                type='radio'
                defaultChecked
                required
              />
              <label htmlFor='card'>Card</label>
              <input id='paypal' name='payment-type' type='radio' required />
              <label htmlFor='paypal'>PayPal</label>
            </div>
          {/* </div> */}
          <form id='payment-form'>
            <div className='card-info-container'>
              <div className='card-info'>
                <label>
                  Card Number
                  <input
                    className='full-width'
                    id='card-num'
                    type='text'
                    placeholder='1234 5678 9012'
                    required
                  />
                </label>
                <label>
                  Name on Card
                  <input
                    className='full-width'
                    id='name'
                    type='text'
                    placeholder='Bob Steves'
                    required
                  />
                </label>
                <div className='expire-ccv'>
                  <label>
                    Expires
                    <span className='expire-date'>
                      <input
                        id='month'
                        type='number'
                        min={"01"} max={"12"}
                        size={2}
                        // maxLength={2}
                        // step={12}
                        placeholder='MM'
                        required
                      />
                      <span>/</span>
                      <input
                        id='year'
                        type='number'
                        min={"01"} max={"99"}
                        size={2}
                        // maxLength={2}
                        // step={99}
                        placeholder='YY'
                        required
                      />
                    </span>
                  </label>
                  <label className="cvv">
                    CVV
                    <input
                      id='ccv'
                      type='text'
                      size={3}
                      maxLength={3}
                      placeholder={123}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            <label className='save-card-info'>
              <input className="checkbox" type='checkbox' required />
              Save card for faster checkout
            </label>
          </form>
        {/* <div className="tchk-in2"> */}
        {/* <div className="card-info">
        <input type={"text"} value={"Name on card"} placeholder={"Steve Bobs"} required/>
        <input type={"text"} value={"card number"} placeholder={"1234 5678 9012 3456"} required/>
        <label>Expiry Date</label>
        <span>
        <input type={"text"} value={"Expiry Date"} size={2} maxLength={2} placeholder={"MM"} required/>
        <input type={"text"} value={"Expiry Date"} size={2} maxLength={2} placeholder={"MM"} required/>
        </span>
        <input type={"text"} value={"CVV"} required/>
        </div> */}
        </div>
        <div className='btn1'>
        <button className='btn2' onClick={handleClick} title="Book">Book</button>
        </div>
      </div>
      </div>
    </div>
        </div>
    )
}
export default Checkout;