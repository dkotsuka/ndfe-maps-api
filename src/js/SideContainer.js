import React from 'react'
import ListItem from './ListItem'
import PlaceDetails from './PlaceDetails'
import CuisineSelector from './CuisineSelector'


function SideContainer(props) {
	const list = props.list;
	const shownList = props.shownList;
	const isListView = !props.selected;

	return (
		<div className={`side-container ${isListView ? 'list-view' : 'details'} ${!props.isVisible ? 'hide' : 'visible'}`}>
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

export default SideContainer