import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './Card.css';

const Cart = ({ item,addToCart}) => {
  return (
    <div className='cart-items' key={item.id}>
      <img src={item.img} alt='' />
      <div className='disc'>
        <h1>{item.name}</h1>
        <p>{item.title}</p>
      </div>
      <div className='price'>
        <p>{item.price}$</p>
        <a onClick={addToCart}>
          <FaCartPlus />
        </a>
      </div>
    </div>
  );
};

export default Cart;
