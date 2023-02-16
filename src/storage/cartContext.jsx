import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props){
    let [cart, setCart] = useState([]);

    function addItem(item) {

        let cartAdd = cart.map(item => item);
        let pro = cart.find(pro => pro.id === item.id);
        if (pro) {
            pro.count += item.count;
        } else {
            cartAdd.push(item);
        }

        setCart([...cart, item, cartAdd]);
        }

    
    function removeItem(id) {
        let cartCopy = cart.slice();
        let index = cartCopy.indexOf(prod => { return prod.id === id });
        if (index > -1) {
            cartCopy.splice(index, 1);
            setCart(cartCopy);
            return true;
        }
        return false;
    }

    function clearCart( ) {
        setCart([])        
    }


    function getTotalItems( ) {

        let getTotalItems = cart.reduce((acum, pro) => acum + pro.count, 0);
        return getTotalItems;
    }

    function getTotalCart( ) {
        return 999;
        
    }

    const value = {cart, addItem, getTotalItems, getTotalCart, removeItem, clearCart};

    return <cartContext.Provider value={value}>
        {props.children}
        </cartContext.Provider>

}