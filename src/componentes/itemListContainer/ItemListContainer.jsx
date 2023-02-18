import ItemList from "../itemList/ItemList";
import "./itemListContainer.css";
// import Item from "../item/Item";
import {getItemsByCategory} from "../../data/firebase";
import {getItems, getItemsPromise} from "../../data/firebase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { categoryid } = useParams();

    // con async await

    async function getProducts() {
        if(!categoryid ) {
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

    // if (products.length === 0) {
    //     return categoryid ? <h1>No hay libros en nuestra categoria {categoryid}</h1> : <h1>No hay libros disponibles</h1>
    // }

    if (isLoading) return <Loader/>

    return (
        
        // Este DIV posiblemente se borre (creo que no esta haciendo nada) y solo quede el ItemList 
        <div className="containerList"> 
            <ItemList products={products} {...products} />
        </div>
    )
}
























// export default function ItemListContainer(props) {
//         const [products, setProducts] = useState([])
    
    
//         const { categoryid } = useParams();
    
    
//         async function getProducts() {
//             if (!categoryid) {
//                 try {
                   
//                     let response = await getItems();
//                     console.log(response);
//                     setProducts(response);
                   
//                 } catch (error) {
//                    console.log(error);
//                     setProducts({
//                         type: "danger",
//                         text: `Error cargando los productos: ${error}`,
//                     });
//                 } 
//             } else {
//                 let response = await getItemByCategory(categoryid);
//                 console.log(response);
//                 setProducts(response);
//             }
//         }
//         useEffect(() => {
//             getProducts();
//         }, [categoryid])
        
//         return (
//             <div className="containerList">
//                  <ItemList products={products} {...products} /> 
//             </div>
//         )
//     }







