import React, { useState } from 'react';
import Scrollh from './Scrollh';
import SearchListh from './SearchListh';
// import Cardh from './Cardh';

function Searchh({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchField1, setSearchField1] = useState("");
  const [searchField2, setSearchField2] = useState("");

  const filteredHotels = details.filter(
    
    hotels => {
      return (
        (hotels.city.toLowerCase().includes(searchField.toLowerCase()) ||
        hotels.city.toLowerCase().includes(searchField.toLowerCase())) &&
        (hotels.check_in.toString().includes(searchField1.toString())) &&
        (hotels.check_out.toString().includes(searchField2.toString()))
      );
    }
  );

  const handleChange = e => {    
    setSearchField(e.target.value);
    // console.log(searchField);
  };
  const handleChange1 = e => {    
    setSearchField1(e.target.value);
    // console.log(searchField);
  };
  const handleChange2 = e => {    
    setSearchField2(e.target.value);
    // console.log(searchField);
  };
  // console.log(filteredHotels);
  function searchList() {    
    return (    
      <Scrollh>
        <SearchListh filteredHotels={filteredHotels} />
      </Scrollh>
    );
  }

  return (
    <section className="garamond">      
      <div className="navy georgia ma0 grow">        
        <h2 className="f2">Search for Stays</h2>
      </div>      
      <div className="pa2">
        <input 
          className="pa3 bb br3 b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Enter city" 
          onChange = {handleChange}
        />
        Check in date:
        <input
          className="pa3 bb br3 b--none bg-lightest-blue ma3"
          type = "date" 
          placeholder = "Check in date" 
          onChange = {handleChange1}
        />
        Check out date:
        <input
          className="pa3 bb br3 b--none bg-lightest-blue ma3"
          type = "date" 
          placeholder = "Check in date" 
          onChange = {handleChange2}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Searchh;