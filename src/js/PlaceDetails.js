/*global google*/
import React, {Component} from 'react'
import fetchPlace from './API/ZomatoAPI'
import back_icon from '../img/back-icon.svg'
import ZomatoReview from './ZomatoReview'
import GooglePlaceDetails from './GooglePlaceDetails'
import GooglePlacesReview from './GooglePlacesReview'
import LoadingScreen from './LoadingScreen'


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
		if(!window.google){
			return {}
		}
		const map = new google.maps.Map(document.createElement('div'), {})
		this.service = new google.maps.places.PlacesService(map);
		var request = {
		  placeId: this.props.item.id
		};
		this.service.getDetails(request,
			(result, status) => {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					this.setState({
						isGoogleLoading: false,
						googlePlacesData: result
					})
				} else {
					this.setState({
						isGoogleLoading: false,
						googlePlacesData: null
					})
				}
		})
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
				{(!this.state.isGoogleLoading)? 
					<GooglePlaceDetails data={this.state.googlePlacesData}/>
					: <LoadingScreen/>}
				{ this.state.isGoogleEmpty ? ''
					: !this.state.isGoogleLoading ? 
						<GooglePlacesReview data={this.state.googlePlacesData}/>
						: <LoadingScreen/>}
				{ this.state.isZomatoEmpty ? ''
					: !this.state.isZomatoLoading ? 
						<ZomatoReview data={this.state.zomatoData}/>
						: <LoadingScreen/>}
			</div>
		)
	}
}









