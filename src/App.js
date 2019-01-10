import React, { Component } from 'react';
import './styles/css/App.css';
import MapContainer from './js/MapContainer'
import SideContainer from './js/SideContainer'
import list, {getCenter} from './js/data/data'
import listicon from './img/list.svg'
import MapErrorBoundary from './js/MapErrorBoundary'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showList: list,
			filteredBy: 'all',
			selected: undefined,
			firstLoad: true,
			isSideVisible: false,
			isDetailsVisible: false
		}
		this.map = undefined
	}

	handlePlaceSelection = (index) => {
		const selected = this.state.showList[index]
		this.setState({
			showList: [selected], 
			selected: selected,
			isSideVisible: false,
			isDetailsVisible: true
		})
		this.setMapCenter(selected.position)
	}

	filterByCuisine = (cuisine) => {
		let newList = []
		if (cuisine === 'all') {
			newList = list
		} else {
			newList = list.filter((item) => item.cuisine === cuisine);
		}
		this.setState({showList: newList, filteredBy: cuisine})
	}

	showListAgain = () => {
		this.setState({
			showList: list,
			filteredBy: 'all',
			selected: undefined,
			isDetailsVisible: false
		})
		this.setMapCenter(getCenter)
	}

	onMapMounted = () => ref => {
		if(this.state.firstLoad){
			this.map = ref
			this.setState({firstLoad: false})
		}
		this.setMapCenter(getCenter)
	}

	setMapCenter = (position) => {
		if(this.map){
			this.map.panTo(position)
			if (window.innerWidth >= 769){
				this.map.panBy(-160,0)
			}
		}
		
	}
	toggleVisibility = () => {
		if (this.state.isSideVisible){
			this.setState({isSideVisible: false})
		} else {
			this.setState({isSideVisible: true})
		}
	}

	render() {

		return (
			<div className="App">
				<header className='title'>
					<button className={`toggleBtn ${this.state.isDetailsVisible ? 'hide' : ''}`}
						onClick={() => this.toggleVisibility()}
						style={{backgroundImage : `url(${listicon})`}} />
					<h1><span>the Tastes</span> of Liberdade</h1>
				</header>

				<div className={`main ${this.state.isDetailsVisible ? 'show-details' : 'only-map'}`}>
					<MapErrorBoundary>
						<MapContainer list={this.state.showList} 
								isDetailsVisible={this.state.isDetailsVisible}
								center={getCenter} 
								placeSelection={this.handlePlaceSelection}
								onMapMounted = {this.onMapMounted}/>
					</MapErrorBoundary>
					<SideContainer list={list}
							isVisible={this.state.isSideVisible}
							map={this.map}
							shownList={this.state.showList} 
							filter={this.state.filteredBy}
							selected={this.state.selected}
							onSelectCuisine={this.filterByCuisine}
							onBackToList={this.showListAgain}
							onItemClick={this.handlePlaceSelection}/>
				</div>
			</div>
		);
	}
}

export default App;