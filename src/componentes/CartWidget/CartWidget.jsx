import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Cart from "./assets/shoppingCart.svg";
import "./cartWidget.css";

export default function CartWidget() {
  const {getTotalItems} = useContext(cartContext)

  return (
    <li className="container-widget">
      <div className="widget">
        <img src={Cart} alt="Carrito" />
      </div>
      <div className="counter">
        <span>{getTotalItems()}</span>
      </div>
    </li>
  );
}
