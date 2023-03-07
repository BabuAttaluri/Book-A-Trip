import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cardh({hotels}) {
  const navigate = useNavigate();
  
  // console.log(hotels1.city);
  function handleClick (){
  alert("proceed to check-out...");
  navigate ("/Checkout");
}
   
  return(
    <div className='wrapper'>
    <div className="tc">
      <div className='tc-in'>
        <p className='para'>City:</p>
        <h2>{hotels.city}</h2>
        <p className='para'>Hotel Name:</p>
        <h2>{hotels.hotel_name}</h2>
        <p className='para'>Check in:</p>
        <h2>{hotels.check_in}</h2>
        <p className='para'>Check out:</p>
        <h2>{hotels.check_out}</h2>
        <p className='para'>Room type:</p>
        <h2>{hotels.room_type}</h2>
        <p className='para'>Tariff:</p>
        <h2>{hotels.price_per_night}</h2>
        <p className='para'>Guests:</p>
        <h2>{hotels.guests}</h2>
        <p className='para'>Rating:</p>
        <h2>{hotels.rating}</h2>
        <div className='btn'>
        <button className='br4' onClick={handleClick} title="Login to Book">Book</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cardh;
