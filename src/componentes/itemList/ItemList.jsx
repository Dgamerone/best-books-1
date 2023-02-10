import React from 'react';
import "./itemList.css"
import Item from "../item/Item"

const ItemList = ({ products }) => {
    return (
        <div className='itemList'>
            {products.map(prod => <Item key={prod.id} {...prod}  />)}
        </div>
    )
}

export default ItemList
