import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">E-cart</Link>
      </div>
     
      <div className="cursor-pointer">
        <Link to="/sidebar">
          <AiOutlineShoppingCart className="text-white text-2xl" />
          {cart.length > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-0.2 ml-1 absolute top-1 right-1">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
