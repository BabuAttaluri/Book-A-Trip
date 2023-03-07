import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchField1, setSearchField1] = useState("");

  const filteredFlights = details.filter(
    flights => {      
      return (            
        (flights.from.toLowerCase().includes(searchField.toLowerCase()) ||
        flights.to.toLowerCase().includes(searchField.toLowerCase())) &&
        flights.departure.departureDate.toString().includes(searchField1.toString())       
      );       
    }
  );

  const handleChange = e => {    
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  const handleChange1 = e => {    
    setSearchField1(e.target.value);
    console.log(e.target.value);
  };


  function searchList() {
    return (
      <Scroll>
        <SearchList filteredFlights={filteredFlights} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
       
        <h2 className="f2">Search for Flights</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Enter city" 
          onChange = {handleChange}
        />
        Departure Date:
        <input
          className="pa3 bb br3 b--none bg-lightest-blue ma3"
          type = "date" 
          placeholder = "Enter date" 
          onChange = {handleChange1}
        />

      </div>      
      {searchList()}      
    </section>
  );
}

export default Search;