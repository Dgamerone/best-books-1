import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { createBuyOrder } from '../../data/firebase';
import {cartContext} from '../../storage/cartContext';
import './cartContainer.css';


function CartContainer() {
    const {cart, removeItem, getTotalCart} = useContext(cartContext);
    const [orderId, setOrderId] = useState(null)
    const navigateTo = useNavigate();

    async function handleCheckout(evt){
      const items = cart.map( product => ({
        id: product.id, 
        title: product.title, 
        price: product.price, 
        count: product.count }) )
    // 1. Modelo de orden de compra

    const order = {
      buyer: {
        name: "Douglas",
        email: "bestBooks@gmail.com",
        phone: 654321,
      },
      items: items,
      date: new Date(),
      total: ""
    }

    // 2. Enviar a firebase.js
    let id = await createBuyOrder(order);

    // 3. Recibir respuestas (id) para darle configuracion al user
    // 3.1
    // alert(id);

  // 3.2 Usar Rendering condicional

  // setOrderId(id)

  // 3.3 Redirigir al usuario
  navigateTo(`/my-order/${id}`);
    }

    if(orderId !== null)
    return(
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra es: {orderId}</p>
      </div>
    )


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
                    <button className='buttonDelete'>X</button>
                </div>
                ))}
        </div>
        <small>El total de tu compra es de: ${getTotalCart()} </small>
        <button className='buttonFinish' onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  )
}

export default CartContainer;


