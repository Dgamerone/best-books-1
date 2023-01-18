import ButtonUniversal from "../ButtonUniversal/ButtonUniversal";
import './Item.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ItemList({ title, author, year, price, genre, id, imgUrl, resumen, stock }) {


    const [buttonChange, setButtonChange] = useState("Corazon");
    const button = () => {
        if (buttonChange === "Corazon") {
            setButtonChange('Click')
        } else {
            setButtonChange("Corazon");
        }
    };

let itemid = `/item/${id}`

    return (

        <div className="containerCard">
            <div key={id} className="card">
                <div className="corazonContainer">
                    <button onClick={button} className={buttonChange}>❤</button>
                </div>
                <div className="containerImgText">

                    <div className="titleCard">
                        <h2>{title}</h2>
                    </div>
                    <div className="imgCard">
                        <img src={imgUrl} alt={title} />
                    </div>
                </div>
                <div className="containerDetailsCard">
                    <div className="price">
                        <h3>${price}</h3>
                    </div>
                    <div className="description">
                        <h4>{author}</h4>
                    </div>
                    <div className="description">
                        <h5>Año {year}</h5>
                    </div>
                    <div className="description">
                        <h6>{genre}</h6>
                    </div>
                    <div className="buttonSeeMoreCard">
                        <Link className="linkbutton" to={itemid}>
                        <ButtonUniversal />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


