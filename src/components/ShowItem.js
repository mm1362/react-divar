import React from 'react'
//import BasketContext from "./BasketContext";
import items from "./../assets/data/items.json";
import noImage from '../assets/images/items/no-image.png'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

function ShowItem(props) {
    //const basketContext = useContext(BasketContext)
    const product = items.find(product => product.id === props.id);
    const isAddedToBasket = props.basketProducts.some(product => product.id === props.id);
    let img;
    try {
        img = require(`../assets/images/items/${product.id}.jpg`);
    } catch {
        img = noImage;
    }
    function addRemoveButtonHandler() {
        if (isAddedToBasket)
            props.removeProductsHandler({ ...product })
        else
            props.addProductsHandler({ ...product })
    };
    return (
        <div className="ShowItem container">
            <button
                className={"btn float-left " + (isAddedToBasket ? "btn-danger" : "btn-primary")}
                onClick={addRemoveButtonHandler}
            >
                {isAddedToBasket ? "حذف از سبدخرید" : "اضافه به سبدخرید"}
            </button>
            <h2>{product.name}</h2>
            <h4>{product.price} تومان</h4>
            <img src={img} alt="" />
        </div>
    );

}

const mapStateToProps = state => {
    return {
        basketProducts: state.basketProducts
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addProductsHandler: ({ id, name, price }) => dispatch({ type: actionTypes.ADD_PRODUCT, id, name, price }),
        removeProductsHandler: ({ id }) => dispatch({ type: actionTypes.REMOVE_PRODUCT, id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);