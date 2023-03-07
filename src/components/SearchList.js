import React from 'react';
import Card from './Card';

function SearchList({ filteredFlights }) {
  const filtered = filteredFlights.map(flights => <Card key={flights.id} flights={flights} />); 
  if (filtered === "" ){
    alert("No matching Flights");
  }
  return (
    <div>
      {filtered}      
    </div>
  );
}

export default SearchList;