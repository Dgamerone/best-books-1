import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './itemDetailContainer.css';
import ItemCount from '../itemCount2/ItemCount';
import { getSingleItem } from "../../data/productsData.js";
import { useParams } from 'react-router-dom';
import swal from "sweetalert";
import { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';


export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [isInCart, setIsInCart] = useState(false)
    // Se obtiene el valor de la URL con useParams
    let { itemid } = useParams();


   const {addItem, removeItem, } = useContext(cartContext);


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
                    <div className='stock'>
                        <p>Stock</p>
                        <span>{product.stock}</span>
                    </div>
                    
                    <div className='resumen'>
                        <p>Resumen</p>
                        <spam>{product.resumen}</spam>
                    </div>

                    
                    <ItemCount onAddToCart={handleToCart} />

                    <Link to="/cart">
                        <button onClick={removeItem}>Ir al Carrito</button>
                    </Link>
                    <button onClick={() => removeItem (product.id)}>Eliminar Item</button>
                    <button onClick={removeItem}>Vaciar Carrito</button>
                </div>
            </div>

        </div>

        
    )
}