import React, { Component } from 'react'
import BasketContext from './BasketContext';

export default class Basket extends Component {
    state = {
        products: []
    }
    static contextType = BasketContext;
    render() {
        return (
            <div className="Basket container">
                <h2>سبد خرید</h2>
                {
                    this.context.basketProducts.map(product =>
                        (
                            <div key={product.id} id={product.id} className="item">
                                <h5 className="col-md-8 col-5">{product.name}</h5>
                                <p className="col-md-2 col-5">{product.price} تومان</p>
                                <button className="col-md-1 col-2 btn btn-danger" onClick={() => { this.context.removeFromBasket(product.id); }}>
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


