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

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// create tje earthquake overlay layer
let earthquakes=new L.LayerGroup();

//define the overlay object to add to the map which will be visible at all times
let overlays={
  Earthquakes:earthquakes
};

// Pass our map layers into our layers control and add the layers control to the map.
//add overlays to the control map so it will be visible
L.control.layers(baseMaps,overlays).addTo(map);

// Accessing the airport GeoJSON URL
let earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Grabbing our GeoJSON data.
d3.json(earthquakeUrl).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{
    //we turn each feature into a circleMarker on the map
    pointToLayer: function(feature,latlng){
      console.log(data);
      return L.circleMarker(latlng)
    },
    //adding style for cicleMarker to map with styleInfo function
    style: sytleInfo,
    //create a popup for each cicleMarker and add text
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(earthquakes);
  earthquakes.addTo(map);
});

//this function returns the sytle data for each of the earthquakes we plot
//on the map.  We pass the magnitude of the earthquake into a function to calc radius
function sytleInfo(feature){
  return{
    opacity:1.0,
    fillOpacity:1.0,
    color: "#000000",
    fillColor:getColor(feature.properties.mag),
    radius:getRadius(feature.properties.mag),
    stroke:true,
    weight:0.5,
  };
}

//if magnitude is 0 we set radius to 1 so it still shows up on the map.  otherwise we multiply the magnitude by 4 to be able to see the circle
function getRadius(i){
  if (i==0){
    return 1;
  }
  return i*4;
}

//change markers color based on magnitude to help things standout more
function getColor(i){
  if (i>5){
    return "#ea2c2c";
  }
  if (i>4){
    return "#ea822c";
  }
  if (i>3){
    return "#ee9c00";
  }
  if (i>2){
    return "#eecc00";
  }
  if (i>1){
    return "#d4ee00";
  }
  return "#98ee00";
}

//create legend control object
var legend = L.control({position: 'bottomright'});

legend.onAdd = function () {
  //DomUtil adds div element to index file
  let div = L.DomUtil.create('div', 'info legend'),
    magnitudes = [0, 1, 2, 3, 4, 5],
    colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"];
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < magnitudes.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i>" +
        magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
}
  return div;
};
legend.addTo(map);


//features[0].properties.mag

// let myStyle={
//   color: "blue",
//   fillColor: "#ffffa1",
//   weight: 2,
//   //dashArray: "10 10"
// }


// // Grabbing our GeoJSON data.
// d3.json(torontoNeighborhoods).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME +"</h3>");
//     }
//   }).addTo(map);
//   });
  


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


