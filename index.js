

var map = L.map('mapid').setView([52.520008, 13.404954], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const points = [
    {
        lat:52.500730,
        long:13.336410,
        text:'Supermarkt: Netto City Filiale'
    },
    {
        lat:52.486660,
        long:13.325680,
        text:'Supermarkt: EDEKA Berliner Straße'
    },
    {
        lat:52.520440,
        long:13.388440,
        text:'Supermarkt: REWE'
    },
    {
        lat:52.488410,
        long:13.410470,
        text:'Brauerei: Brauhaus Südstern'
    },
    {
        lat:52.542430,
        long:13.469710,
        text:'Brauerei: Berliner-Kindl-Schultheiss-Brauerei'
    },
    {
        lat:52.458410,
        long:13.310470,
        text:'Brauerei: Berliner Berg Brauerei'
    }
]
points.map((point) => {
    L.marker([point.lat, point.long]).addTo(map)
    .bindPopup(point.text)
    .openPopup();
})