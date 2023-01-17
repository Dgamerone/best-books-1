import React, {addToCart, useState} from 'react'
import './Item.css';


export const Item = ({title, author, year, price, genre, id, imgUrl, resumen, stock}) => {

  const [isActive, setIsActive]  = useState(false);
  const handleClick = () => {    
    setIsActive(isActive);
  };

  return (

    <div className='item-box'>

        <button onClick={handleClick}>❤️️</button>

        <div className='item-title'>{title}</div>
        <img src={imgUrl} width="120" height="150" alt={title} />
        <div className='item-author'>{author}</div>
        <div className='item-genre'>{genre}</div>
        <div className='item-year'>{year}</div>
        <div className='item-price'>${price}</div>
        <button className="item-plus-button" onClick={() => addToCart()}>
          Ver Detalle
        </button>        
    </div>
  )
}



