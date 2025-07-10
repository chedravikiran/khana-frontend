import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';
import Cart from '../src/pages/Cart/Cart';
import Home from '../src/pages/Home/Home';
import PlaceOrder from '../src/pages/PlaceOrder/PlaceOrder';
import Footer from './assets/components/Footer/Footer';
import LoginPopup from './assets/components/LoginPopup/LoginPopup';


const App = () => {
  const [showLogin, setShowLogin]=useState(false);
  return (
<>
{showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
   </>
  );
};

export default App;
