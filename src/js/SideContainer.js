import React from 'react'
import ListItem from './ListItem'
import PlaceDetails from './PlaceDetails'


function SideContainer(props) {
	const list = props.list;
	const shownList = props.shownList;
	const isListView = !props.selected;

	return (
		<div className={`side-container ${isListView ? 'list-view' : 'details'}`}>
			{
				isListView ? (
					<div>
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
				) : (<PlaceDetails map={props.map} item={props.selected} onBackToList={props.onBackToList}/>)
			}
		</div>
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
				<span id='filter'>Filter by cuisine:</span>
				<select value={props.selectValue}
					onChange={(event) => props.onSelectCuisine(event.target.value)}
					aria-labelledby='filter'>
					{cuisineList.map((item) => {
						return <option value={item} key={item}>{item}</option>
					})}
				</select>
			</div>
		)
}

export default SideContainer