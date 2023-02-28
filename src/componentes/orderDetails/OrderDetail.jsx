import React from 'react'
import { useParams } from 'react-router-dom'

function OrderDetail() {
    const {orderid} = useParams()
  return (
    <div>
        <h1>Orden de Compra</h1>
        <p>Gracias por su compra, este es tu id de compra: ${orderid} </p>
    </div>
  )
}

export default OrderDetail