// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//assign map variable to object L.map which gets string mapid from div element in index.html
//set view puts view of map at lat=40.7 and long=-94.5, zoom 4 in range 0-18
let map = L.map('mapid').setView([37.6213, -110.3790], 5);

// //alternate method
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);


//skill drill
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [47.9743, -84.7816],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  style:'dash'
}).addTo(map);





// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(i) {
//   console.log(i)
//   L.circleMarker(i.location,{
//     radius:i.population/100000
//   })
//   .bindPopup("<h2>"+i.city+ ", " + i.state + "</h2><hr><h3>Population: "+i.population.toLocaleString() + "</h3>")
//   .addTo(map)
//  });

// //skill drill
// cityData.forEach(function(i) {
//   console.log(i)
//   L.circleMarker(i.location,{
//     radius:(i.population-200000)/100000,
//     fillColor:"orange",
//     color:"orange",
//     linewidth: 4
//   })
//   .bindPopup("<h2>"+i.city+ ", " + i.state + "</h2><hr><h3>Population: "+i.population.toLocaleString() + "</h3>")
//   .addTo(map)
//  });


  // We create the tile layer that will be the background of our map.

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//skill drill
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// //skill drill
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);