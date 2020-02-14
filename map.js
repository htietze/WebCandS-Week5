let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id:'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGVzdGFjY291bnR5YXlhIiwiYSI6ImNrNmxpbXptMDAzdW4zbmxmM2ZteTlqdTEifQ._gVLiIIwA0ff21a1vErfSA'}).addTo(map)

let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
.bindPopup('MCTC').addTo(map)

let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates)
.bindPopup('St. Paul College').addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2
})
.bindPopup('Twin Cities Metro Area')
.addTo(map)