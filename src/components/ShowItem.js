import React, { useContext } from 'react'
import BasketContext from "./BasketContext";
import items from "./../assets/data/items.json";
import noImage from '../assets/images/items/no-image.png'

export default function ShowItem(props) {
    const basketContext = useContext(BasketContext)
    const product = items.find(product => product.id === props.id)
    let img;
    try {
        img = require(`../assets/images/items/${product.id}.jpg`);
    } catch {
        img = noImage;
    }
    return (
        <div className="ShowItem container">
            <button
                className="btn btn-primary float-left"
                onClick={() => { basketContext.addToBasket({ ...product }) }}
            >
                
                اضافه به سبد خرید
                </button>
            <h2>{product.name}</h2>
            <h4>{product.price} تومان</h4>
            <img src={img} />
        </div>
    );

}
