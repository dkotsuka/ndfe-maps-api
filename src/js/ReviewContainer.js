import React from 'react'
import stars from '../img/stars.png'

function ReviewContainer(props) {
	function getText(rating) {
		switch (Math.floor(rating)) {
			case 5:
			case 4:
				return {text: 'Very good!', color: '#64DD17'}
			case 3:
				return {text: 'Good!', color: '#AEEA00'}
			case 2:
				return {text: 'Regular', color: '#FFB300'}
			case 1:
				return {text: 'Bad', color: '#B71C1C'}
			default:
				return {text: 'Not rated', color: '#90A4AE'}
		}
	}
	const data = props.data
	const ratingText = getText(data.average_rating)
	const priceText = {'1':'$','2':'$$','3':'$$$','4':'$$$$','5':'$$$$$'}
	
	return <div className='reviews-container'>
		<div className='rating-container'>
			<h2>on {data.api_name}</h2>
			<div className='star-rating'
			style={{
				backgroundImage: `url(${stars}), linear-gradient(to right, #FFD600, #FFD600 ${data.rating}%, #3E2723 ${data.rating}%, #3E2723 100%)`
			}}></div>
			<h3 style={{color: `${ratingText.color}`}}>{ratingText.text}</h3>
			<p><small>Average rating:</small> {data.average_rating}</p>
			<p><small>Price range:</small> {priceText[data.price]}</p>
			<p><a href={data.link} target="_blank" rel="noopener noreferrer"><small>open in {data.api_url}</small></a></p>
		</div>
	</div>
}

export default ReviewContainer