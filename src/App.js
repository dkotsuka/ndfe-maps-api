import React, { Component } from 'react';
import './styles/css/App.css';
import MapContainer from './MapContainer';

const visited = [
  { position: {lat: -23.5587936, lng: -46.6340618}, 
    name:'Rong He',
    title: 'Rong He Liberdade',
    cuisine: 'Chinese'},

  { position: {"lat" : -23.5541464, "lng" : -46.6359451}, 
    name:'Rei dos Reis',
    title: 'Restaurante Rei dos Reis',
    cuisine: 'Chinese'},

  { position: {"lat" : -23.553948, "lng" : -46.635726}, 
    name:'Chi Fu',
    title: 'Restaurante Chi Fu',
    cuisine: 'Chinese'},

  { position: {"lat" : -23.5597755, "lng" : -46.6350853}, 
    name:'Aska',
    title: 'Aska Lamen House',
    cuisine: 'Japanese'},

  { position: {"lat" : -23.5578761, "lng" : -46.6355277}, 
    name:'Espaço Kazu',
    title: 'Espaço Kazu Restaurante',
    cuisine: 'Japanese'},

  { position: {"lat" : -23.5576965, "lng" : -46.6358918}, 
    name:'Lamen Kazu',
    title: 'Lamen Kazu Restaurante',
    cuisine: 'Japanese'},

  { position: {lat: -23.5559823,lng: -46.6350262}, 
    name:'Korea House',
    title: 'Restaurante Korea House',
    cuisine: 'South Korean'},

  { position: {lat: -23.5596261,lng: -46.6333928}, 
    name:'Portal da Coreia',
    title: 'Restaurante Portal da Coreia',
    cuisine: 'South Korean'},

  { position: {lat: -23.555737,lng: -46.634325},
    name:'Hot Pot',
    title: 'Restaurante Hot Pot',
    cuisine: 'South Korean'},
  
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer visited={visited} />
      </div>
    );
  }
}
export default App;