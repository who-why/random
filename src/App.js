import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/card/Card';
import items from './Data';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (selectedItem) => {
    setCart([...cart, selectedItem]);
  };

  return (
    <Router>
      <div>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Card items={items} addToCart={addToCart} />} />
          <Route path="/sidebar" element={<Sidebar cart={cart} setCart={setCart}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
