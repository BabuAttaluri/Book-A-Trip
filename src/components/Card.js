import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({flights}) {
  const navigate = useNavigate();
  function handleClick(){
    alert("please log-in to proceed")
    navigate("/login")
  }
 
  return(    
    <div className='wrapper'>
    <div className="tc">
      <div className='tc-in'>
        <p className='para'>FROM:</p>
        <h2>{flights.from}</h2>
        <p className='para'>TO:</p>
        <h2>{flights.to}</h2>
        <p className='para'>DEPARTURE:</p>
        <h2>{flights.departure.departureTime} | {flights.departure.departureDate}</h2>
        <p className='para'>RETURN:</p>
        <h2>{flights.return.returnTime} | {flights.return.returnDate}</h2>
        <p className='para'>AIRLINE:</p>
        <h2>{flights.airlineName}</h2>
        <p className='para'>VIA:</p>
        <h2>{flights.via}</h2>
        <p className='para'>PRICE:</p>
        <h2>{flights.price}</h2>
        <p className='para'>DURATION:</p>
        <h2>{flights.duration}</h2>
        <div className='btn'>
        <button className='br4' onClick={handleClick}>Book</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;