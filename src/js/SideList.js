import React, {Component} from 'react'
import ListItem from './ListItem'

export default class SideList extends Component{
	render(){
		const list = this.props.list;
		return (
			<div className='side-list'>
				<ul>
					{list.map((item) => (
						<ListItem item={item}/>
					))}
				</ul>
			</div>
		)
	}
}