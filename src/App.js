import React, { Component } from 'react';
import './styles/css/App.css';
import MapComponent from './js/MapContainer'
import SideList from './js/SideList'
import list, {getCenter} from './js/data'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showList: list,
			filteredBy: 'all',
			selected: undefined
		}
	}

	handlePlaceSelection = (index) => {
		const selected = this.state.showList[index]
		this.setState({
			showList: [selected], 
			selected: selected
		})
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
			selected: undefined
		})
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

				<MapComponent list={this.state.showList} 
					center={getCenter} 
					onMarkerClick={this.handlePlaceSelection}/>
				</div>
			</div>
		);
	}
}
export default App;