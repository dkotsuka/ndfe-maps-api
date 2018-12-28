import React from 'react'

export default function ListItem(props) {
	return (
		<li className='list-item-container'>
			<h2>{props.item.name}</h2>
			<span>{props.item.cuisine}</span>
		</li>
	)
}