import React from 'react'
import NavigationItems from './NavigationItems';

export default function Menu(props) {
	const toggleClass = props.show ? 'open' : '';
	return (
		<nav className={'SideMenu ' + toggleClass} >
			<NavigationItems />
		</nav>
	)
}


