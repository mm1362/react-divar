import React, { Component } from 'react'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
import BasketContext from './BasketContext'
import barIcon from '../assets/svg/bars-solid.svg'

export default class Header extends Component {
    render() {
        return (
            <header className='Header'>
                <NavLink className="navbar-brand" to="/" style={{ marginLeft: 'auto', color: 'red' }}>دیوار</NavLink>
                <Menu />
                <NavLink className="navbar-brand" to="/basket" >
                    سبد خرید
                <BasketContext.Consumer>
                        {context => context.basketCount < 1 ? null : <span className="badge badge-primary">{context.basketCount}</span>}
                    </BasketContext.Consumer>
                </NavLink>
                <i className="fas fa-bars" onClick={this.props.toggleSideMenuHandler} ></i>
                {/* <a onClick={this.props.toggleSideMenuHandler} ><img src={barIcon} style={{width:'24px'}} /></a> */}
            </header>

        )
    }
}
