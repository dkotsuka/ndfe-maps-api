import React from 'react'
import flag_japan from '../img/flag-jp.svg'
import flag_korea from '../img/flag-sk.svg'
import flag_india from '../img/flag-in.svg'
import flag_thailand from '../img/flag-th.svg'
import flag_vietnam from '../img/flag-vt.svg'
import flag_china from '../img/flag-cn.svg'

export default function ListItem(props) {
	const flag = {
		jp: flag_japan,
		cn: flag_china,
		vt: flag_vietnam,
		in: flag_india,
		sk: flag_korea,
		th: flag_thailand
	}
	return (
		<li className='list-item-container'
			style={{backgroundImage : `url(${props.item.img})`}}>
			<img src={flag[props.item.code]} alt='cuisine type'/>
			<h2>{props.item.name}</h2>
			<button onClick={() => props.onItemClick(props.index)}
				tabIndex="0">
				<span>Check it!</span>
			</button>
		</li>
	)
}


//https://maps.googleapis.com/maps/api/streetview?size=400x400&location=-23.5587936,-46.6340618&fov=90&heading=235&pitch=10&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=PWfEuO0fKzgeE7qlq39QoIVTvK8=