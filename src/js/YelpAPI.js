'use strict';

const yelp = require('yelp-fusion');
const apiKey = '1n0huE6Pil8aZVEU85V9Jnww1jzn3aWwUnobdeZ4oowMuPHej6FMxlm97jPZ4a6-wXCmvZR0pGUX-RqcnxBL6-BL9gCgl4IysYqg4FFGyFfBVgtyM2dri8c222AtXHYx';

function fetchPlace(position) {

	const searchRequest = {
		latitude: position.lat,
		longitude: position.lng
	};

	const client = yelp.client(apiKey);

	client.search(searchRequest).then(response => {
	  const firstResult = response.jsonBody.businesses[0];
	  const prettyJson = JSON.stringify(firstResult, null, 4);
	  console.log(prettyJson);
	}).catch(e => {
	  console.log(e);
	});
}

export default fetchPlace