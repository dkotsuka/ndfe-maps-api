import marker_jp from '../img/mk-jp.png'
import marker_sk from '../img/mk-sk.png'
import marker_cn from '../img/mk-cn.png'
import marker_vt from '../img/mk-vt.png'
import marker_in from '../img/mk-in.png'
import marker_th from '../img/mk-th.png'

const data = [
	{ position: {lat: -23.5587936, lng: -46.6340618}, 
	name:'Rong He',
	adress: 'Rua da Glória, 622-A',
	id: 'ChIJAw8StqdZzpQRBpZ57GrkIh4',
	title: 'Rong He Liberdade',
	img: 'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5588354,-46.6339542&fov=55&heading=270&pitch=-5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=WSaxTadESmoUu4ef4cNm2eZttTM=',
	cuisine: 'chinese',
	code: 'cn'},

	{ position: {"lat" : -23.5541464, "lng" : -46.6359451}, 
	name:'Rei dos Reis',
	adress: 'Praça Carlos Gomes, 178',
	id: 'ChIJo-S5XKlZzpQRq8ctPsBPd4c',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5541468,-46.635667&fov=45&heading=245&pitch=-5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=R52bfxTct5H1fWYoRgJqUf1xQOs=',
	title: 'Restaurante Rei dos Reis',
	cuisine: 'chinese',
	code: 'cn'},

	{ position: {"lat" : -23.553948, "lng" : -46.635726}, 
	name:'Chi Fu',
	adress: 'Praça Carlos Gomes, 200',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.554289,-46.6356467&fov=45&heading=230&pitch=-5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=PPjrq0czOCYTUAPIjkpLNKjVVLw=',
	id: 'ChIJE4LPXKlZzpQRWaPXypCAzBw',
	title: 'Restaurante Chi Fu',
	cuisine: 'chinese',
	code: 'cn'},

	{ position: {"lat" : -23.5597755, "lng" : -46.6350853}, 
	name:'Aska',
	adress: 'Rua Galvão Bueno, 466',
	id: 'ChIJDZ6ZWqZZzpQRa8A6tDNwU0Y',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5597919,-46.634944&fov=45&heading=305&pitch=-5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM',
	title: 'Aska Lamen House',
	cuisine: 'japanese',
	code: 'jp'},

	{ position: {"lat" : -23.5578761, "lng" : -46.6355277}, 
	name:'Espaço Kazu',
	adress: 'Rua Thomaz Gonzaga, 84/90',
	id: 'ChIJMZ9an6hZzpQRUrj4GXD11t8',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.557773,-46.635457&fov=80&heading=220&pitch=5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=9XGux8p3dXPp7Zlb3DfjdkTyhSk=',
	title: 'Espaço Kazu Restaurante',
	cuisine: 'japanese',
	code: 'jp'},

	{ position: {"lat" : -23.5576965, "lng" : -46.6358918}, 
	name:'Lamen Kazu',
	adress: 'Rua Thomaz Gonzaga, 87',
	id: 'ChIJfbcVS2NgzpQRKYYwcNza9T4',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5577625,-46.635905&fov=80&heading=10&pitch=5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=GE3M0A6qk3q_CUBegdtovR1_iQ0=',
	title: 'Lamen Kazu Restaurante',
	cuisine: 'japanese',
	code: 'jp'},

	{ position: {lat: -23.5559823,lng: -46.6350262}, 
	name:'Korea House',
	adress: 'Rua Galvão Bueno, 43',
	id: 'ChIJ045q5KhZzpQRpKqzA6f3mvg',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5559357,-46.6352151&fov=80&heading=90&pitch=5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=WaAPFufwAWANwaWUFFxIj0_thmA=',
	title: 'Restaurante Korea House',
	cuisine: 'south korean',
	code: 'sk'},

	{ position: {lat: -23.5596261,lng: -46.6333928}, 
	name:'Portal da Coreia',
	adress: 'Rua da Glória, 729',
	id: 'ChIJhdJaCqdZzpQRTmJiEdrFlfk',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5596802,-46.6334612&fov=45&heading=55&pitch=0&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=DN9Q9pMHKrt0vkBuKs3q3FYEOsk=',
	title: 'Restaurante Portal da Coreia',
	cuisine: 'south korean',
	code: 'sk'},

	{ position: {lat: -23.555737,lng: -46.634325},
	name:'Top Pot',
	adress: 'Rua da Glória, 288',
	id: 'ChIJvdy-V6hZzpQR68pwuZGyYuY',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5557716,-46.6342546&fov=120&heading=270&pitch=5&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=xFd6CbwN0YIdk1vGJDfMavwEKOE=',
	title: 'Restaurante Hot Pot',
	cuisine: 'south korean',
	code: 'sk'},

	{ position: {lat: -23.5576366,lng: -46.6356632},
	name: 'Porque Sim',
	adress: 'Rua Thomaz Gonzaga, 75',
	id: 'ChIJh-Aho6hZzpQRrjYN_2is5ek',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5577721,-46.63568&fov=45&heading=340&pitch=-10&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=hZuZiJnMtKoLKv3fdNws898kLSo=',
	title: 'Restaurante Porque Sim',
	cuisine: 'japanese',
	code: 'jp'},

	{ position: {lat: -23.5576682,lng: -46.6360849},
	name: 'Thai Chef Experience',
	adress: 'Rua Tomaz Gonzaga, 45 D',
	id: 'ChIJW5xqpahZzpQRVPKfXEFJcag',
	img:'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=-23.5577599,-46.6360225&fov=45&heading=340&pitch=-10&key=AIzaSyCxQjJownMlBJpkcnyCgUHtPzQVD57-3SM&signature=sGgPcHjS62JMpwFPq2UI-ZhcAJo=',
	title: 'Restaurante Thai Chef',
	cuisine: 'thai',
	code: 'th'},
];

const list = data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

const points = list.map((item) => item.position)

function calcBounds() {
	const bounds = {sw: {lat: null, lng: null}, ne:  {lat: null, lng: null}}
	points.forEach((point) => {
		if(!bounds.ne.lat || point.lat > bounds.ne.lat){ bounds.ne.lat = point.lat }
		if(!bounds.ne.lng || point.lng > bounds.ne.lng){ bounds.ne.lng = point.lng }
		if(!bounds.sw.lat || point.lat < bounds.sw.lat){ bounds.sw.lat = point.lat }
		if(!bounds.sw.lng || point.lng < bounds.sw.lng){ bounds.sw.lng = point.lng }
	})
	return bounds
}

function centerCalc() {
	const bounds = calcBounds()
	const lat = ((bounds.sw.lat + bounds.ne.lat) / 2)
	const lng = ((bounds.sw.lng + bounds.ne.lng) / 2)
	return {lat: lat, lng: lng} 
}

const getCenter = centerCalc()
const getBounds = calcBounds()

const markerIcon = {
  jp: marker_jp,
  cn: marker_cn,
  vt: marker_vt,
  th: marker_th,
  in: marker_in,
  sk: marker_sk,
}

export {getCenter, getBounds, markerIcon}
export default list