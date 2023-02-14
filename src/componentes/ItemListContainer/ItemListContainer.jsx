import ItemList from "../itemList/ItemList";
import "./itemListContainer.css";
// import Item from "../item/Item";
import getItems, {getItemsByCategory} from "../../data/productsData";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
    const [products, setProducts] = useState([])

    let { categoryid } = useParams();

    // con async await

    async function getProducts() {
        if(!categoryid ) {
            try {
                let response = await getItems()
                setProducts(response);
            } catch (error) {
                alert(error);
            }
        }
        else{
            let response = await getItemsByCategory(categoryid);
            setProducts(response);
        }

    }

    useEffect(() =>{
        getProducts();
        } ,[categoryid])


    if (products.length === 0) {
        return categoryid ? <h1>No hay libros en nuestra categoria {categoryid}</h1> : <h1>No hay libros disponibles</h1>
    }



    return (
        // Este DIV posiblemente se borre (creo que no esta haciendo nada) y solo quede el ItemList 
        <div className="containerList"> 
            <ItemList products={products} {...products} />
        </div>
    )
}




    // useEffect( () =>{
    //     if(categoryid ){
    //         getItemsByCategory(categoryid ).then((respuesta) => {
    //             setProducts(respuesta);
    //         });
    //     }

    //     else
    //     {
    //         getItems().then((respuesta) => {
    //             console.log(respuesta);
    //             setProducts(respuesta);
    //         });
    //     }
    // }, [categoryid ]);























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







