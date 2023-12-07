import React from 'react'
import './Card.css'
import Cart from './Cart'

const Card = ({items,addToCart}) => {
  return (
    <div className='card-items'>
          {items.map((item)=>{
                return (
                   <>
                     <Cart key={item.id} item={item} addToCart={addToCart}/>
                   </>
                )
          })}
    </div>
  )
}

export default Card