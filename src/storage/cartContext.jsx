import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props){
    let [cart, setCart] = useState([]);

    function addItem(item) {
        // let newCart = [...cart]
        // newCart.push(item);
        // setCart(newCart)

        setCart([...cart, item])
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

        let total = 0;
        cart.forEach((item) => (total += 1));
        return total;

    }

    function getTotalCart( ) {
        return 999;
        
    }

    const value = {cart, addItem, getTotalItems, getTotalCart, removeItem, clearCart};

    return <cartContext.Provider value={value}>
        {props.children}
        </cartContext.Provider>

}