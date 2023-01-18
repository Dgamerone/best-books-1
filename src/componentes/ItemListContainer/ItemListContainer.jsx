import ItemList from "../item/ItemList";
import "./itemListContainer.css";
import getItems from "../../data/productsData";
import { useEffect, useState } from "react";


export default function ItemListContainer(props) {
    const [products, setProducts] = useState([])

    useEffect( () =>{
    getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta)
    })
})
    return (
        <div className="containerList">
            <ItemList products={products} {...products} />
        </div>
    )
}

