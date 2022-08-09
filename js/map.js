var mymap = L.map('leafletmap');
mymap.setView([23.3340, 75.0370], 15); //ratlam
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(mymap);

$('.pure-button').on('click', function() {
    mymap.locate({ setView: true, maxZoom: 15 });
});

mymap.on('locationfound', onLocationFound);

function onLocationFound(e) {
    L.marker(e.latlng).addTo(mymap);
}