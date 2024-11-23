import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'

const Item =(props)=> {
    const cart = useContext(CartContext);
    console.log("Cart",cart);

  return (
    <div className='item-card'>
        <h4>{props.name}</h4>
        <p>${props.price}</p>
        {/* function to add a item/object in a existing array without losing the original array */}
        <button onClick={()=> cart.setItems([...cart.items,{name:props.name,price:props.price},]    
        )}>Add to cart</button>
    </div>
  )
}

export default Item