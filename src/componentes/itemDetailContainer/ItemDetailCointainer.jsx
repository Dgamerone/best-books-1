import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './itemDetailContainer.css';
import ItemCount from '../itemCount/ItemCount';
import { getSingleItem } from "../../data/firebase";
import { useParams } from 'react-router-dom';
import swal from "sweetalert";
import { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';
import './itemDetailContainer.css'; 


export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [isInCart, setIsInCart] = useState(false)
    // Se obtiene el valor de la URL con useParams
    let { itemid } = useParams();


   const {cart, addItem, removeItem, } = useContext(cartContext);

   const itemInCart = cart.find(item=> item.id === product.id)

   let stockUpdate;

   if(itemInCart)
    stockUpdate = product.stock - itemInCart.count;
    else
    stockUpdate = product.stock;


    const handleToCart = (count) =>{
        setIsInCart(true);
        swal(`Agregado al Carrito`,
        `${count} - ${product.title}`,
        "success",
        );
        addItem({...product, count:count});
    }

    useEffect(() => {
        // Pasamos por parametro al productsData
        getSingleItem(itemid).then((response) => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
        .catch((error) => alert(`Error: ${error}`))
    }, [itemid])

    if (loading) {
        return <span className="loader"></span>
    }

    return (
        <div className="containerDetail">
            <div className='details'>
                <div className='imageDetail'>
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className='textDetails'>
                    <div className='nameProduct'>
                        <h3>{product.title}</h3>
                    </div>
                    <div className='valueProduct'>
                        <h5>${product.price}</h5>
                    </div>
                    <div>
                        <h6>{product.author}</h6>
                    </div>
                    <div className='categoryProduct'>
                        <spam>{product.category}</spam>
                    </div>
                    <div className='year'>
                        <p>Año</p>
                        <span>{product.year}</span>
                    </div>
                    {/* <div className='stock'>
                        <p>Stock</p>
                        <span>{product.stock}</span>
                    </div> */}
                    
                    <div className='resumen'>
                        <p>Resumen</p>
                        <spam>{product.resumen}</spam>
                    </div>

                    
                    <ItemCount stock={stockUpdate} onAddToCart={handleToCart} />
                    <div className='buttonsDetail'>
                        <Link to="/cart">
                            <button className='buttonDetail' onClick={removeItem}>Ir al Carrito</button>
                        </Link>
                        <button className='buttonDetail'onClick={() => removeItem (product.id)}>Eliminar Item</button>
                        <button className='buttonDetail'onClick={removeItem}>Vaciar Carrito</button>
                    </div>
                </div>
            </div>

        </div>

        
    )
}