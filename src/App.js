/*global google*/
import React, { Component } from 'react';
import './styles/css/App.css';
import MapContainer from './js/MapContainer'
import SideList from './js/SideList'
import list, {getCenter} from './js/data'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showList: list,
			filteredBy: 'all',
			selected: undefined,
			mapCenter: getCenter,
			firstLoad: true
		}
		this.map = undefined
	}

	handlePlaceSelection = (index) => {
		const selected = this.state.showList[index]
		this.setState({
			showList: [selected], 
			selected: selected
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
		this.map.panTo(position)
		if (window.innerWidth >= 769){
      this.map.panBy(-160,0)
    }
  }

	render() {
		return (
			<div className="App">
				<header className='title'>
					<h1><span>the Tastes</span> of Liberdade</h1>
				</header>
				<div className='main'>

				<SideList list={list}
					shownList={this.state.showList} 
					filter={this.state.filteredBy}
					selected={this.state.selected}
					onSelectCuisine={this.filterByCuisine}
					onBackToList={this.showListAgain}
					onItemClick={this.handlePlaceSelection}/>

				<MapContainer list={this.state.showList} 
					center={this.state.mapCenter} 
					placeSelection={this.handlePlaceSelection}
					onMapMounted = {this.onMapMounted}/>
				</div>
			</div>
		);
	}
}

//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
export default App;