import React from 'react'

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

export default CuisineSelector