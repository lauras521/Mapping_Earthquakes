// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//assign map variable to object L.map which gets string mapid from div element in index.html
//set view puts view of map at lat=40.7 and long=-94.5, zoom 4 in range 0-18
// let map = L.map('mapid').setView([30,30], 2);

//alternate method
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });



//Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
  });

//dark layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let torontoNeighborhoods = 'https://raw.githubusercontent.com/lauras521/Mapping_Earthquakes/main/torontoNeighborhoods.json';

// // Grabbing our GeoJSON data.
// d3.json(torontoNeighborhoods).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });
  

let myStyle={
  color: "blue",
  fillColor: "#ffffa1",
  weight: 2,
  //dashArray: "10 10"
}

// Grabbing our GeoJSON data.
d3.json(torontoNeighborhoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME +"</h3>");
    }
  }).addTo(map);
  });
  


// //skill drill 13.5.5
// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     color: "#ffffa1",
//     weight: 2,
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3><hr><h3> Destination: "+feature.properties.dst+"</h3>");
//     }
//   }).addTo(map);
//   });
  


  
//   {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2> Airport Code:" + feature.properties.faa + "</h2><hr><h3> Airport Name: "+feature.properties.name+"</h3>");
//   }
// }).addTo(map);

// //skill drill
// // can add a popup marker for each feature and add data from the properties of the JavaScript object.
//   L.geoJSON(data, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h2> Airport Code:" + feature.properties.faa + "</h2><hr><h3> Airport Name: "+feature.properties.name+"</h3>");
//     }
//   }).addTo(map);}


//layer.bindPopup("<h2> Airport Code:" + feature.properties.faa + "</h2><hr><h3> Airport Name: "+feature.properties.name+"</h3>")

// Grabbing our GeoJSON data.

// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>"+feature.properties.city+", "+ feature.properties.country+"</h3>");
//   }
// }).addTo(map);

//13.5.2
// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// //L.geoJSON(sanFranAirport).addTo(map);

// // // Grabbing our GeoJSON data.
// // L.geoJSON(sanFranAirport, {
// //   // We turn each feature into a marker on the map.
// //   pointToLayer: function(feature, latlng) {
// //     console.log(feature);
// //     return L.marker(latlng)
// //     .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>"+feature.properties.city+", "+ feature.properties.country+"</h3>");
// //   }
// // }).addTo(map);



// // can add a popup marker for each feature and add data from the properties of the JavaScript object.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2> Airport Code:" + feature.properties.faa + "</h2><hr><h3> Airport Name: "+feature.properties.name+"</h3>");
//   }
// }).addTo(map);




  // We create the tile layer that will be the background of our map.

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// //skill drill
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// //skill drill
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


