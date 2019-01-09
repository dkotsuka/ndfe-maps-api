import React from 'react'
import spinning from '../img/spinning.svg'

function LoadingScreen(props) {
	return <div className='loading-container' style={{backgroundImage: `url(${spinning})`}}></div>
}

export default LoadingScreen