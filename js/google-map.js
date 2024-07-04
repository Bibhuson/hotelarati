
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 27.380473, lng: 87.204441},
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: {lat: 27.380473, lng: 87.204441},
        map: map,
        title: 'Hotel Arati'
    });
}
