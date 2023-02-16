import { useState } from "react";
import './itemCount.css';


export default function ItemCount({onAddToCart}) {
    const [count, setCount] = useState(0);

    function sumClick() {
        setCount(count + 1)
    }

    function restClick() {
        setCount(count - 1)
    }

    return (
        <div className="buttonAdd">
            <div className="buttonSuma">
                <button className="buttonMenos" disabled={count <= 0} onClick={restClick}>-</button>
                <span className="contador ">{count}</span>
                <button className="buttonMas" disabled={count === 10} onClick={sumClick}>+</button>
            </div>

            <div className="compra">
                <button onClick={()=> onAddToCart(count)}>Agregar</button>
            </div>
        </div>
    )
}