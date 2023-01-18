import { useState } from "react";
import './itemCount.css';
export default function ItemCount({onAdd}) {

    const [click, setClick] = useState(0);
    function sumClick() {
        setClick(click + 1)
    }
    function restClick() {
        setClick(click - 1)
    }
    return (

        <div className="buttonAdd">
            <div className="buttonSuma">
                <button className="buttonMenos" disabled={click <= 0} onClick={restClick}>-</button>
                <span className="contador">{click}</span>
                <button className="buttonMas" disabled={click === 10} onClick={sumClick}>+</button>
            </div>

            <div className="compra">
                <button onClick={()=>onAdd()}>Agregar</button>
            </div>
        </div>
    )
}