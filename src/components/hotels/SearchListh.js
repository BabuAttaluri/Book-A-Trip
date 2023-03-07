import Cardh from './Cardh';

function SearchListh({ filteredHotels }) {
  const filtered = filteredHotels.map(hotels => <Cardh key={hotels.id} hotels={hotels} />); 
  if (filtered === "" ){
    alert("No matching Stays");
  }
  return (
    <div>
      {filtered}      
    </div>
  );
}

export default SearchListh;