import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import ShowItem from './ShowItem';
import Basket from './Basket';
import About from './About';
import Contact from './Contact';

export default function Content() {
    console.log("Content Render");
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/cat/:cat" render={props => <Home cat={props.match.params.cat}/>} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/basket" component={Basket} />
                <Route exact path="/items/:id" render={props =>
                    // <ShowItem {...this.state.products.find(product => product.id === props.match.params.id)} />
                    <ShowItem id={props.match.params.id} />
                } />
            </Switch>

        </main>
    )
}
