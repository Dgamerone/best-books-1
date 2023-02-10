import { useState, useEffect } from 'react';
import './itemDetailContainer.css';
import ItemCount from '../itemCount/ItemCount';
import { getProductsDetails } from "../../data/productsData.js";
import { useParams } from 'react-router-dom';
import swal from "sweetalert";


export default function ItemDetailContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    let { itemid } = useParams();

    const onAddToCart = (click) =>{
        swal(`Agregado al Carrito`,
            `${productos.title}`,
            "success",
        );
    }
    useEffect(() => {
        getProductsDetails(itemid).then((response) => {
            setProductos(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [itemid])

    if (loading) {
        return <h1 className='loading'>Cargando...</h1>
    }

    return (
        <div className="containerDetail">
            <div className='details'>
                <div className='imageDetail'>
                    <img src={productos.imgUrl} alt="" />
                </div>
                <div className='textDetails'>
                    <div className='nameProduct'>
                        <h3>{productos.title}</h3>
                    </div>
                    <div className='valueProduct'>
                        <h5>${productos.price}</h5>
                    </div>
                    <div>
                        <h6>{productos.author}</h6>
                    </div>
                    <div className='categoryProduct'>
                        <spam>{productos.category}</spam>
                    </div>
                    <div className='year'>
                        <p>Año</p>
                        <span>{productos.year}</span>
                    </div>
                    <div className='stock'>
                        <p>Stock</p>
                        <span>{productos.stock}</span>
                    </div>
                    
                    <div className='resumen'>
                        <p>Resumen</p>
                       <spam>{productos.resumen}</spam>
                    </div>

                    <div className="buttons">
                        <ItemCount onAdd={onAddToCart} />
                    </div>
                </div>
            </div>

        </div>

        
    )
}