import React from "react";
import { Link } from "react-router-dom";
import noImage from '../assets/images/items/no-image.png'

function Item(props) {
    let img;
    try {
        img = require(`../assets/images/items/${props.id}.jpg`);
    } catch {
        img = noImage;
    }
    return (
        <Link className="Item col-xl-4 col-lg-6 col-12" to={`items/${props.id}`}>
            <div className='myTest'>
                <h4>{props.name}</h4>
                <p>{props.price} تومان</p>
            </div>
            <img src={img} alt="no pic" />
            {/* <button
                className="btn btn-primary"
                onClick={() => props.history.push(`items/${props.id}`)}
            >
                ادامه
        </button> */}
        </Link>

    );
}

export default Item;
