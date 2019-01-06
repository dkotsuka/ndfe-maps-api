/*global google*/
import React, {Component} from 'react'
import fetchPlace from './ZomatoAPI'
import back_icon from '../img/back-icon.svg'
import stars from '../img/stars.png'
import spinning from '../img/spinning.svg'

export default class PlaceDetails extends Component{
	constructor(props){
		super(props)
		this.state = {
			firstLoad: true,
			isZomatoLoading: true,
			isZomatoEmpty: false,
			isGoogleLoading: true,
			isGoogleEmpty: false,
			zomatoData: {},
			googlePlacesData: {}
		}
	}

	componentDidMount(){
		if(this.state.firstLoad){
			this.loadZomatoData()
			this.loadGooglePlacesData()
		}
		this.setState({firstLoad: false})
	}

	loadZomatoData(){
		if(this.props.item.zomatoID){
			fetchPlace(this.props.item)
			.then((data) => {
				this.setState({isZomatoLoading: false, zomatoData: data})
			})
		} else {
			this.setState({isZomatoLoading: false, isZomatoEmpty: true})
		}
	}

	loadGooglePlacesData(){
		const map = new google.maps.Map(document.createElement('div'), {})
		this.service = new google.maps.places.PlacesService(map);
		var request = {
		  placeId: this.props.item.id
		};
		this.service.getDetails(request,
			(result) => this.setState({
				isGoogleLoading: false,
				googlePlacesData: result
			}));
	}

	render(){
		return (
			<div className='details-container'>
				<div className='details-header'>
					<button onClick={() => this.props.onBackToList()}
						style={{
							backgroundImage: `url(${back_icon})`
						}}><span>Voltar</span></button>
					<h2>{this.props.item.title}</h2>
				</div>
				{(!this.state.isGoogleLoading)?<GooglePlaceDetails data={this.state.googlePlacesData}/>: <LoadingScreen/>}
				{ this.state.isGoogleEmpty ? ''
				: !this.state.isGoogleLoading ? <GooglePlacesReview data={this.state.googlePlacesData}/> : <LoadingScreen/>}
				{ this.state.isZomatoEmpty ? ''
				: !this.state.isZomatoLoading ? <ZomatoReview data={this.state.zomatoData}/> : <LoadingScreen/>}
			</div>
		)
	}
}

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
	}
	return <div className='place-details'>
		{img ? <div className='image-container' style={{backgroundImage : `url(${img})`}} alt='restaurant picture'/> : ''}
		<p>{adress}</p>
		{phone ? <p>Phone: {phone}</p> : ''}
		{url ? <p>Home: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>:''}
	</div>
}

function GooglePlacesReview(props) {
	const data = {
		api_name: 'Google Places',
		api_url: 'maps.google.com',
		average_rating: 0,
		price: '',
		link: '',
		rating: 0
	}

	if(props.data){
		data.average_rating = props.data.rating
		data.price = props.data.price_level
		data.link = props.data.url
		data.rating = Math.floor((parseFloat(data.average_rating) / 5) * 100)
	}

	return <ReviewContainer data={data}/>
}

function ZomatoReview(props) {
	const data = {
		api_name: 'Zomato',
		api_url: 'zomato.com',
		average_rating: '',
		price: '',
		link: '',
		rating: 0
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

function LoadingScreen(props) {
	return <div className='loading-container' style={{backgroundImage: `url(${spinning})`}}></div>
}