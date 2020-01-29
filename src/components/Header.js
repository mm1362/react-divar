import React, { Component } from 'react'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
//import BasketContext from './BasketContext'
//import barIcon from '../assets/svg/bars-solid.svg'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

class Header extends Component {
    componentDidMount() {
        this.props.loadProductsHandler()
    }

    render() {
        return (
            <header className='Header'>
                <NavLink className="navbar-brand" to="/" style={{ marginLeft: 'auto', color: 'red' }}>دیوار</NavLink>
                <Menu />
                <NavLink className="navbar-brand" to="/basket" >
                    سبد خرید
                    {this.props.basketCount < 1 ? null : <span className="badge badge-primary">{this.props.basketCount}</span>}
                </NavLink>
                <i className="fas fa-bars" onClick={this.props.toggleSideMenuHandler} ></i>
                {/* <a onClick={this.props.toggleSideMenuHandler} ><img src={barIcon} style={{width:'24px'}} /></a> */}
            </header>

        )
    }
}

const mapStateToProps = state => {
    return {
        basketCount: state.basketCount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProductsHandler: (id) => dispatch({ type: actionTypes.LOAD_PRODUCTS, id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);