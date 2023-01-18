import Cart from "./assets/opencart.svg";
import "./cartWidget.css";

export default function CartWidget() {
  return (
    <div className="container-widget">
      <div className="widget">
        <img src={Cart} alt="" />
      </div>
      <div className="counter">
        <p>0</p>
      </div>
    </div>
  );
}
