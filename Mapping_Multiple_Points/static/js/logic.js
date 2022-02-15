// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//assign map variable to object L.map which gets string mapid from div element in index.html
//set view puts view of map at lat=40.7 and long=-94.5, zoom 4 in range 0-18
let map = L.map('mapid').setView([40.7, -94.5], 4);

// //alternate method
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(i) {
  console.log(i)
  L.circleMarker(i.location,{
    radius:i.population/100000
  })
  .bindPopup("<h2>"+i.city+ ", " + i.state + "</h2><hr><h3>Population: "+i.population.toLocaleString() + "</h3>")
  .addTo(map)
 });

//skill drill
cityData.forEach(function(i) {
  console.log(i)
  L.circleMarker(i.location,{
    radius:(i.population-200000)/100000,
    fillColor:"orange",
    color:"orange",
    linewidth: 4
  })
  .bindPopup("<h2>"+i.city+ ", " + i.state + "</h2><hr><h3>Population: "+i.population.toLocaleString() + "</h3>")
  .addTo(map)
 });


  // We create the tile layer that will be the background of our map.

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//skill drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);