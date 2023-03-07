import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookingMain from './components/BookingMain';
import Flight from './components/Flt';
// import Login from './components/Login';
import Hotel from './components/Stays';
import Login1 from './components/Login1';
import Checkout from './components/Checkout';
// import Checkout1 from './components/Checkout1';

function App() {
  return (         
      <BrowserRouter>
      <BookingMain/>      
      <Routes>
        <Route path="/flight" element={<Flight/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/login' element={<Login1/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        {/* <Route path='/Checkout' element={<Checkout1/>}/> */}
      </Routes>      
      </BrowserRouter>  
      // </div>
  );
}
export default App;