const mapStyles = [
    { elementType: 'geometry', stylers: [{ color: '#FFF9C4' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#FFFDE7' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#0D47A1' }] },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{ visibility: "off" }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#FFD180' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#FFAB40' }]
    },
    {
    	featureType: 'road',
    	elementType: 'labels.text.stroke',
    	stylers: [{ visibility: "off" }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#FF8A65' }]
    },
	{
    	featureType: 'road.highway',
    	elementType: 'labels.text.stroke',
    	stylers: [{ visibility: "on" }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#E64A19' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#0091EA' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
    }
]

export default mapStyles