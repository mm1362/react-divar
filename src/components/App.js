import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import "antd/dist/antd.css";
import '../assets/styles/App.css';
import Header from './Header';
import SideMenu from './SideMenu';
import BasketContext from './BasketContext';
import Content from './Content';

export default class App extends Component {
  state = {
    basketProducts: [],
    basketCount: 0,
    showSideMenu: false
  }
  componentDidMount() {
    this.loadBasket();
  }
  toggleSideMenuHandler = () => {
    this.setState(state => ({ showSideMenu: !state.showSideMenu }))
  }
  render() {
    return (
      <Router>
        <BasketContext.Provider
          value={{
            basketProducts: this.state.basketProducts,
            basketCount: this.state.basketCount,
            addToBasket: this.addToBasket,
            removeFromBasket: this.removeFromBasket,
          }}
        >
          {/* <div className="App"> */}
            <Header toggleSideMenuHandler={this.toggleSideMenuHandler} />
            <SideMenu show={this.state.showSideMenu} />
            <Content />
          {/* </div> */}
        </BasketContext.Provider>
      </Router>
    );
  }
  addToBasket = ({ id, name, price }) => {
    localStorage.setItem(id, JSON.stringify({ id, name, price }))
    this.loadBasket();
  }
  loadBasket = () => {
    const basketProducts = Object.keys(localStorage).sort().map(productId => JSON.parse(localStorage.getItem(productId)));
    this.setState({ basketProducts: basketProducts, basketCount: basketProducts.length });
  }
  removeFromBasket = (productId) => {
    console.log('hello', productId);

    localStorage.removeItem(productId);
    this.loadBasket();
  }

}






