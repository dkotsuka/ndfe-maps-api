import React from 'react'
import ReviewContainer from './ReviewContainer'

function GooglePlacesReview(props) {
	const data = {
		api_name: 'Google Places',
		api_url: 'maps.google.com',
		average_rating: 0,
		price: '',
		link: '',
		rating: 0
	}
	if(!props.data){
		throw new Error('error with GooglePlaces API request')
	}

	if(props.data){
		data.average_rating = props.data.rating
		data.price = props.data.price_level
		data.link = props.data.url
		data.rating = Math.floor((parseFloat(data.average_rating) / 5) * 100)
	}

	return <ReviewContainer data={data}/>
}

export default GooglePlacesReview