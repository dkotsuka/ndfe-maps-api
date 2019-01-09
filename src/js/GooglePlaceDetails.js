import React from 'react'

function GooglePlaceDetails(props) {
	let adress
	let phone
	let url
	let img
	if(props.data){
		adress = props.data.formatted_address
		phone = props.data.formatted_phone_number
		url = props.data.website
		if (props.data.photos) {
			img = props.data.photos[0].getUrl()
		}
	} else {
		throw new Error('error with GooglePlaces API request')
	}
	return <div className='place-details'>
		{img ? <div className='image-container' style={{backgroundImage : `url(${img})`}} alt='restaurant picture'/> : ''}
		<p>{adress}</p>
		{phone ? <p>Phone: {phone}</p> : ''}
		{url ? <p>Home: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>:''}
	</div>
}

export default GooglePlaceDetails