import { useState, useEffect } from 'react';
import './itemDetailContainer.css';
import ItemCount from '../itemCount/ItemCount';
import { getSingleItem } from "../../data/productsData.js";
import { useParams } from 'react-router-dom';
import swal from "sweetalert";


export default function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    // Se obtiene el valor de la URL con useParams
    let { itemid } = useParams();

    const onAddToCart = (click) =>{
        swal(`Agregado al Carrito`,
            `${product.title}`,
            "success",
        );
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
        return <h1 className='loading'>Cargando...</h1>
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

                    <div className="buttons">
                        <ItemCount onAdd={onAddToCart} />
                    </div>
                </div>
            </div>

        </div>

        
    )
}