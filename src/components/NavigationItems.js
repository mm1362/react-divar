import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationItems(props) {
	return (
		<React.Fragment>
			<NavLink className={props.classes} to="/about">درباره ما</NavLink>
			<NavLink className={props.classes} to="/contact">تماس با ما</NavLink>
		</React.Fragment>
	)
}
