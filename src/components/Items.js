import React from "react";
import Item from "./Item";

export default function Items(props) {
  console.log('Items Render');
  return (
    <div className="Items">
      {props.items.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
}
