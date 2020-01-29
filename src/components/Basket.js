import React, { Component } from 'react'
//import BasketContext from './BasketContext';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

class Basket extends Component {
    state = {
        products: []
    }
    //static contextType = BasketContext;
    render() {
        return (
            <div className="Basket container">
                <h2>سبد خرید</h2>
                {
                    this.props.basketProducts.map(product =>
                        (
                            <div key={product.id} id={product.id} className="item">
                                <h5 className="col-md-8 col-5">{product.name}</h5>
                                <p className="col-md-2 col-5">{product.price} تومان</p>
                                <button className="col-md-1 col-2 btn btn-danger" onClick={() => { this.props.removedProductHandler(product.id); }}>
                                    حذف
                                </button>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        basketProducts: state.basketProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removedProductHandler: (id) => dispatch({type: actionTypes.REMOVE_PRODUCT, id}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);


