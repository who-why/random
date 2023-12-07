import React from 'react';
import './Sidebar.css';

const Sidebar = ({ cart, setCart }) => {
  return (
    <div> 
      
      {cart.map((item, index) => {
        return (
          <div key={index}>
            {item.title}
          </div>
        );
      })}
      
    </div>
  );
};

export default Sidebar;
