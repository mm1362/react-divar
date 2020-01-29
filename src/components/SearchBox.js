import React from "react";
//import { Input } from "antd";

export default function SearchBox(props) {
	const category = props.currentCategory
		? props.currentCategory.name
		: "همه آگهی‌ها";
	//const { Search } = Input;
	return (
		<div className="SearchBox">
			<input
                type="text"
                placeholder={'جستجو در ' + category}
                onChange={e => props.searchHandler(e.target.value)}
            />
			{/* <Search
				placeholder={"جستجو در " + category}
				onSearch={value => props.searchHandler(value)}
				size="large"
			/> */}
		</div>
	);
}
