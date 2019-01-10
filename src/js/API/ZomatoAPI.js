
const endPoint = `https://developers.zomato.com/api/v2.1/restaurant?res_id=`
const requestHeaders = new Headers();
requestHeaders.append('user-key', '49a244a55a8bfaec970239b78c358a49')

const init = { method: 'GET',
           	headers: requestHeaders,
           	mode: 'cors',
       		cache: 'default'};


const fetchPlace = (item) => fetch(endPoint+item.zomatoID, init)
	.then(response => response.json())
	.catch((err) => console.log('catch'))


export default fetchPlace