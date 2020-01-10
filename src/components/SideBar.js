import React from 'react'
import Categories from './Categories';



export default function SideBar(props) {
    return (
        <aside className="SideBar col-2">
            <h4>دسته‌بندی‌ها</h4>
        <Categories categories={props.categories} />
    </aside>
    )
}



