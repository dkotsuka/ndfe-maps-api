import React from 'react'

function ErrorContainer(props) {
	return (
		<div className='error-container'>
            <h3>Sorry Something went wrong!</h3>
          	<p>Error with {props.name} API request</p>
        </div>
	)
}

export default ErrorContainer