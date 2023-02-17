import React, {useContext} from 'react';
import {cartContext} from '../../storage/cartContext';
import './cartContainer.css';

function CartContainer() {
    const {cart, removeItem, getTotalCart} = useContext(cartContext);


  return (
    <div>
        <h1>Tu carrito</h1>
        <div>
            {cart.map(item =>(
                <div className='cart-item'>
                    <img src={item.imgUrl} alt="mini-img" />
                    <h5>{item.title}</h5>
                    <p>{item.count}</p>
                    <p>{item.price}</p>
                    <button>X</button>
                </div>
                ))}
        </div>
        <small>El total de tu compra es de: ${getTotalCart()} </small>
    </div>
  )
}

export default CartContainer;


