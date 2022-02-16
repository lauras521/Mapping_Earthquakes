# Mapping Earthquakes

## Purpose
The purpose of this project was to visually and interactively show off the different magnitudes of earthquakes all over the world for the last 7 days.  GeoJSON earthquake data was used from the USGS webiste to retrieve coordinates and magnitudes of earthquakes for the last 7 days.  This information was added to a map.  Additionally, a different GeoJSON data file was read with tectonic plate information to add an overlay map to show tectonic plate data for world.  

GeoJSON data was used to populate a geographical map using JavaScript and the D3 library.  The Leaflet library was than used to plot data on a Mapbox map using an API request. 

A view of the final map with all deliverables is below.  

<p align="center">
  <img src = https://github.com/lauras521/Mapping_Earthquakes/blob/155b42511180c4e91b0a6897094f5fd11301cafb/Earthquake_Challenge/Resources/all_with_pop_up.PNG>
</p>


This image shows the base and overlay map filter options created throughout Deliverables 1-3.

<p align="center">
  <img src = https://github.com/lauras521/Mapping_Earthquakes/blob/155b42511180c4e91b0a6897094f5fd11301cafb/Earthquake_Challenge/Resources/view_of_overlays_and_base_maps.PNG>
</p>


## Deliverable 1
Tectonic plate plate data was read from the following GeoJSON using D3 and mapped using Linestrings.  An overlay map for Tectonic plates was created.  You can remove the tectonic plate data completely from the view, or you can show tectonic plate data across any base map (i.e. streets, satellite, or dark). 
https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

<p align="center">
  <img src = https://github.com/lauras521/Mapping_Earthquakes/blob/1939c93a47a32ab4912f96ad23d7c271a77c94c3/Earthquake_Challenge/Resources/tectonic_plate_only.PNG>
</p>

## Deliverable 2
GeoJSON data on earthquakes with a magnitude > 4.5 in the last 7 days was pulled from the USGS website and displayed as a new overlay layer on the map.

<p align="center">
  <img src = https://github.com/lauras521/Mapping_Earthquakes/blob/1939c93a47a32ab4912f96ad23d7c271a77c94c3/Earthquake_Challenge/Resources/major_quakes_only.PNG>
</p>


## Deliverable 3
A new dark base layer was displayed with the Mapbox API.  See image below:

<p align="center">
  <img src = https://github.com/lauras521/Mapping_Earthquakes/blob/1939c93a47a32ab4912f96ad23d7c271a77c94c3/Earthquake_Challenge/Resources/dark_base_layer_d3.PNG>
</p>

