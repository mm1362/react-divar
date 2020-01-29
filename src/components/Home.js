import React, { Component } from 'react'
import Items from './Items';
import items from "./../assets/data/items.json";
import categories from "../assets/data/categories.json";
import SideBar from './SideBar';
import SearchBox from './SearchBox';
//import Categories from './Categories';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: items,
            categories: categories,
            filteredItems: items,
            showItems: items,
            currentCat: null
        }
    }


    componentDidMount() {
        // axios.get('j4.json')
        // //axios.get('http://ba3t.ir/json/j4.json')
        //     .then(res => {
        //         const result = res.data.result;
        //         this.setState({ blogItems: result });
        //     })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Home getDerivedStateFromProps', props.cat);
        if (props.cat !== state.currentCat) {
            let newFilterItems = state.items;
            if (props.cat) newFilterItems = state.items.filter(item => item.cat === props.cat);
            return {
                filteredItems: newFilterItems,
                currentCat: props.cat,
                showItems: newFilterItems
            };
        }
        return null;
    }

    searchItems = search => {
        const iRegex = new RegExp(search, 'i')
        const searchResult = this.state.filteredItems.filter(item => iRegex.test(item.name));
        this.setState({ showItems: searchResult })
    }

    render() {
        console.log("Home Render");
        return (
            <div className="Home">
                <SideBar categories={this.state.categories} />
                <div style={{flex:"1"}}>
                <SearchBox
                    searchHandler={this.searchItems}
                    currentCategory={this.state.categories.find(category=>category.id===this.state.currentCat)}
                />
                <Items items={this.state.showItems} />
                </div>
            </div>
        )
    }
}
