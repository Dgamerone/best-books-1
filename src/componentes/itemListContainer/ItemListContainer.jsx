import ItemList from "../itemList/ItemList";
import "./itemListContainer.css";
// import Item from "../item/Item";
import {getItemsByCategory} from "../../data/productsData";
import {getItems, getItemsPromise} from "../../data/firebase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { categoryid } = useParams();

    async function getProducts() {
        if(!categoryid) {
            try {
              let response = await getItemsPromise();
              setProducts(response);
            } catch (error) {
              alert(error);
            } finally{
                setIsLoading(false);
            }
        }
        else{
            let response = await getItemsByCategory(categoryid);
            setProducts(response);
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        getProducts();
        }, [categoryid])

    if (isLoading) return <Loader/>

    return (
        
        // Este DIV posiblemente se borre (creo que no esta haciendo nada) y solo quede el ItemList 
        <div className="containerList"> 
            <ItemList products={products} {...products} />
        </div>
    )
}
