import React from 'react'
import { Link } from 'react-router-dom';

function Categories(props) {
    console.log("Categories Render");
    return <React.Fragment>
        <Link to="/">همه آگهی‌ها</Link>
        {props.categories.map(category =>
            <Link key={category.id} to={"/cat/" + category.id}>{category.name}</Link>
            // <a onClick={() => {
            //     props.categoryClickHandler(category.id)
            //     props.history.push("/cat/" + category.id)
            // }
            // }>
            //     {category.name}
            // </a>
        )}
    </React.Fragment>

}


export default Categories

