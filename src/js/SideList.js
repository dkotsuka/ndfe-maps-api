import React from 'react'
import ListItem from './ListItem'

function SideList(props) {
	const list = props.list;
	const shownList = props.shownList;
	return	!props.selected ? (
		<div className='side-container'>

			<CuisineSelector list={list}
				onSelectCuisine={props.onSelectCuisine}
				selectValue={props.filter}/>
			<ul>
				{shownList.map((item,index) => (
					<ListItem item={item} 
						key={item.id}
						index={index}
						onItemClick={props.onItemClick}/>
				))}
			</ul>
		</div>
	):(
		<PlaceDetails selected={props.selected} onBackToList={props.onBackToList}/>
	)
	
}

function CuisineSelector(props) {
		const cuisineList = ['all']
		props.list.forEach((item) => {
			if (!cuisineList.includes(item.cuisine)) {
				cuisineList.push(item.cuisine)
			}
		});
		cuisineList.sort()
		return (
			<div className='filter-container'>
				<span>Filter by cuisine:</span>
				<select value={props.selectValue} onChange={(event) => props.onSelectCuisine(event.target.value)}>
					{cuisineList.map((item) => {
						return <option value={item} key={item}>{item}</option>
					})}
				</select>
			</div>
		)
}

function PlaceDetails(props) {
	return (
		<div className='side-container'>
			<div>
				<button onClick={() => props.onBackToList()}>Voltar</button>
			</div>
			<h2>{props.selected.name}</h2>
		</div>
	)
}

export default SideList