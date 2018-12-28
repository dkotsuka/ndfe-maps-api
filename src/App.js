import React, { Component } from 'react';
import './styles/css/App.css';
import MapContainer from './js/MapContainer'
import SideList from './js/SideList'

const list = [
  { position: {lat: -23.5587936, lng: -46.6340618}, 
    name:'Rong He',
    id: 'ID ChIJAw8StqdZzpQRBpZ57GrkIh4',
    title: 'Rong He Liberdade',
    cuisine: 'cn'},

  { position: {"lat" : -23.5541464, "lng" : -46.6359451}, 
    name:'Rei dos Reis',
    id: 'ChIJo-S5XKlZzpQRq8ctPsBPd4c',
    title: 'Restaurante Rei dos Reis',
    cuisine: 'cn'},

  { position: {"lat" : -23.553948, "lng" : -46.635726}, 
    name:'Chi Fu',
    id: 'ChIJE4LPXKlZzpQRWaPXypCAzBw',
    title: 'Restaurante Chi Fu',
    cuisine: 'cn'},

  { position: {"lat" : -23.5597755, "lng" : -46.6350853}, 
    name:'Aska',
    id: 'ChIJDZ6ZWqZZzpQRa8A6tDNwU0Y',
    title: 'Aska Lamen House',
    cuisine: 'cn'},

  { position: {"lat" : -23.5578761, "lng" : -46.6355277}, 
    name:'Espaço Kazu',
    id: 'ChIJMZ9an6hZzpQRUrj4GXD11t8',
    title: 'Espaço Kazu Restaurante',
    cuisine: 'jp'},

  { position: {"lat" : -23.5576965, "lng" : -46.6358918}, 
    name:'Lamen Kazu',
    id: 'ChIJfbcVS2NgzpQRKYYwcNza9T4',
    title: 'Lamen Kazu Restaurante',
    cuisine: 'jp'},

  { position: {lat: -23.5559823,lng: -46.6350262}, 
    name:'Korea House',
    id: 'ChIJ045q5KhZzpQRpKqzA6f3mvg',
    title: 'Restaurante Korea House',
    cuisine: 'kr'},

  { position: {lat: -23.5596261,lng: -46.6333928}, 
    name:'Portal da Coreia',
    id: 'ChIJhdJaCqdZzpQRTmJiEdrFlfk',
    title: 'Restaurante Portal da Coreia',
    cuisine: 'kr'},

  { position: {lat: -23.555737,lng: -46.634325},
    name:'Top Pot',
    id: 'ChIJvdy-V6hZzpQR68pwuZGyYuY',
    title: 'Restaurante Hot Pot',
    cuisine: 'kr'},

  { position: {lat: -23.5576366,lng: -46.6356632},
    name: 'Porque Sim',
    id: 'ChIJh-Aho6hZzpQRrjYN_2is5ek',
    title: 'Restaurante Porque Sim',
    cuisine: 'jp'},

  { position: {lat: -23.5576682,lng: -46.6360849},
    name: 'Thai Chef Experience',
    id: 'ChIJW5xqpahZzpQRVPKfXEFJcag',
    title: 'Restaurante Thai Chef',
    cuisine: 'th'},
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideList list={list}/>
        <MapContainer list={list}/>
      </div>
    );
  }
}
export default App;