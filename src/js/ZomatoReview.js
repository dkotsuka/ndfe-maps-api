import React from 'react'
import ReviewContainer from './ReviewContainer'

function ZomatoReview(props) {
	const data = {
		api_name: 'Zomato',
		api_url: 'zomato.com',
		average_rating: '',
		price: '',
		link: '',
		rating: 0
	}
	if (!props.data) {
		throw new Error('error with Zomato API request')
	}
	if(props.data.user_rating){
		const userRating = props.data.user_rating
		data.average_rating = userRating.aggregate_rating
		data.rating = Math.floor((parseFloat(data.average_rating) / 5) * 100)
	}
	if (props.data.url) {
		data.link = props.data.url
	}
	if (props.data.price_range){
		data.price = props.data.price_range
	}
	return <ReviewContainer data={data}/>
}

export default ZomatoReview