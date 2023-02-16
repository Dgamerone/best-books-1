import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Cart from "./assets/shoppingCart.svg";
import "./cartWidget.css";

export default function CartWidget() {
  const {getTotalItems} = useContext(cartContext)
  return (
    <div className="container-widget">
      <div className="widget">
        <img src={Cart} alt="Carrito" />
      </div>
      <div className="counter">
        <p>{getTotalItems()}</p>
      </div>
    </div>
  );
}
