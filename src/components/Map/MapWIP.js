import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import 'leaflet-easyprint';
import 'leaflet-draw';
import 'leaflet.measurecontrol';
import 'leaflet-easybutton';
import 'leaflet.polyline.snakeanim'
import '../../shared/leaflet.snogylop.js';
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet-draw/dist/leaflet.draw.css";
import "../../../node_modules/leaflet.measurecontrol/docs/leaflet.measurecontrol.css";
import MapTile from './MapTile/MapTile';





const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 52);
const mybounds = L.latLngBounds(southWest, northEast);

let placeHolder, tileLayer__1, tileLayer__2
let config = {}
config.params = {
	center: [1.46,18.3],
	zoom: 4,
	zoomSnap: 0.1,
	minZoom: 3,
	maxBounds:mybounds,
	opacity:0,
	measureControl:true,
	zoomControl:false
};
config.tileLayer = {
	//Original:
	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjok8tye50dmu2smqd1uh51z0/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri2: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri3: 'https://api.mapbox.com/styles/v1/mkmd/cjok90ksaadt12st8byurc9bp/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri4: 'https://api.mapbox.com/styles/v1/mkmd/cjooa2k5e47qh2sl8vu8z2o4f/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',

	params: {
		maxZoom: 18,
		tileSize: 512,
	  zoomOffset: -1,
	}
};

class LeafletMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			map: null,
			// tileLayer: null,
			list: 0,
			currLayerClicked: false,
			hello: null,
		};

		// this.onEachFeature = this.onEachFeature.bind(this);
		// this.agglos_onEachFeature = this.agglos_onEachFeature.bind(this);
		// this.agglos_pointToLayer = this.agglos_pointToLayer.bind(this);
		// this.agglos_cityFilter = this.agglos_cityFilter.bind(this);
		// placeHolder_filter = placeHolder_filter.bind(this);
		this.treemap_filter = this.treemap_filter.bind(this);
		// this.hoverStyle = this.hoverStyle.bind(this);
		// this.selectedStyle = this.selectedStyle.bind(this);
		this.treemap_pointToLayer = this.treemap_pointToLayer.bind(this);
		// this.treemap_onEachFeature = this.treemap_onEachFeature.bind(this);
		// this.selectedAgglosStyle = this.selectedAgglosStyle.bind(this);
	}

	componentDidMount() {

		let map = L.map('map', config.params);

		let tiles = [ ...this.props.tile ];
		let tileLayers = tiles.map((tile, key) => ( L.tileLayer(tile.url, config.tileLayer.param) ));
		tileLayer__1 = tileLayers[0];
		tileLayer__2 = tileLayers[1];
		

		// ** Adding Shades to Map
		//
		// this.mapShades = L.geoJson(this.props.africaOne, {
		// 	invert:true,
		// 	color:"grey",
		// 	stroke: false,
		// 	fillOpacity:0.8
		// })
		// this.mapShades.addTo(map);

		placeHolder = L.featureGroup();
		placeHolder.addTo(map);
		placeHolder.addLayer(tileLayer__1);

		this.abovefive = L.geoJson( { "type": "FeatureCollection", "features": [ { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 31.255,30.13 ] }, "properties": { "Name":"Cairo", "Population":22995802 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 3.337584742,6.589961167 ] }, "properties": { "Name":"Lagos", "Population":11810523 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 7.045712305,5.812861246 ] }, "properties": { "Name":"Onitsha", "Population":8530514 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 28.13184538,-26.06703456 ] }, "properties": { "Name":"Johannesburg", "Population":8314220 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 15.33483552,-4.396663245 ] }, "properties": { "Name":"Kinshasa", "Population":7270000 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 13.31293462,-8.926452268 ] }, "properties": { "Name":"Luanda", "Population":6979211 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 30.586,31.125 ] }, "properties": { "Name":"Alexandrie", "Population":6585102 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 36.7942443,-1.21047772 ] }, "properties": { "Name":"Nairobi aggl.", "Population":5877118 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 39.16785785,-6.819328852 ] }, "properties": { "Name":"Dar es Salaam", "Population":5325879 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 32.51556821,15.58927334 ] }, "properties": { "Name":"Khartum", "Population":5264746 } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ 34.74913174,0.38159039 ] }, "properties": { "Name":"Kisumu aggl.", "Population":5040159 } } ] }
		,{pointToLayer: this.abovefive_pointToLayer,
		  onEachFeature: this.onEachFeature_f
			 }	)

		L.easyButton( 'fa-search-minus', function(){
			map.setView([1.46,18.3],3);
		}).addTo(map);

		L.easyButton( 'fa-camera', function(){
			printer.printMap('CurrentSize', 'Africapolis');
		}).addTo(map);

		const printer = L.easyPrint({
					sizeModes: ['Current'],
					filename: 'Africapolis',
					exportOnly: true,
					hideControlContainer: true,
					hidden: true,
					customWindowTitle: "Copyright: SWAC"
		}).addTo(map);

		let eng = 'oecd_white_en'
		if(this.props.lang === 0) {
			eng = 'oecd_white_en'
		}else{
			eng='oecd_white_fr'
		}
		// console.log(eng);
		const logo = L.control({position: 'bottomleft'});
		logo.onAdd = function(map){
		let div = L.DomUtil.create('div', 'oecd_logo');
		div.innerHTML= "<img src='assets/images/" + eng + ".png' width='50%' alt='Africapolis Visualise Urbanisation in Africa'/>";
			return div;
		}
		logo.addTo(map);

		this.setState({ map });
	}

	switch = (prevProps) => {
		this.state.map.setView([1.46,18.3],3);
		placeHolder.clearLayers();
		if(this.props.triggerAnim > prevProps) {
			placeHolder.addLayer(tileLayer__2);
		} else if(this.props.triggerAnim < prevProps) {
			placeHolder.removeLayer(tileLayer__2);
			placeHolder.addLayer(tileLayer__1);
		}
	}

	componentDidUpdate(prevProps, prevState){
		this.state.map.dragging.disable();
		this.state.map.touchZoom.disable();
		this.state.map.doubleClickZoom.disable();
		this.state.map.scrollWheelZoom.disable();
		this.state.map.boxZoom.disable();
		this.state.map.keyboard.disable();
		
		// let map;

		// switch() {
		// 	case():
		// 		map
		// 	break;
		// 	default:
		// 		map
		// }

		// let map = placeHolder.addLayer(tileLayer__1);
		// console.log(this.props.path)
		// switch(`${this.props.path}`) {
		// 	case('/home'):
		// 	case('/home/africapolis'):
		// 		map = placeHolder.addLayer(tileLayer__1);
		// 	break;
		// 	default: map;
		// }
		// return map;

		// if(this.props.treemapFilter === 'narrative') {
			//this.state.map.removeLayer(tileLayer)
		
			// placeHolder.removeLayer(tileLayer2)
			//placeHolder.addLayer(this.state.tileLayer)
			// if(this.treemap) {
			// 	placeHolder.removeLayer(this.treemap)
			// }
		
		switch(this.props.path) {
			case('/home'):
			case('/home/africapolis'):
				this.switch(prevProps.triggerAnim);
			break;
			case('/home/defining_urban'):
			console.log(prevProps.triggerAnim);
				if (this.props.triggerAnim < prevProps.triggerAnim || prevProps.triggerAnim === undefined){
					placeHolder.clearLayers();
					placeHolder.addLayer(tileLayer__1);
					this.state.map.setView([-25.419,31.932],16)
					const route= L.featureGroup([
						L.polyline([[-25.4162,31.9313],[-25.4161,31.9335]],{snakingSpeed: 100,dashArray:"5 10"}),
						L.geoJson({ "type": "Feature", "properties": { "id": "c13e827f90781f7f86a9824cb6b9677e", "FID": null, "high": null, "measure": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 31.927045, -25.414409 ], [ 31.926121, -25.414856 ], [ 31.92588, -25.41551 ], [ 31.926027, -25.416175 ], [ 31.926442, -25.416296 ], [ 31.926429, -25.416574 ], [ 31.924638, -25.416726 ], [ 31.92471, -25.417146 ], [ 31.925238, -25.417207 ], [ 31.925277, -25.418486 ], [ 31.924754, -25.41851 ], [ 31.924794, -25.419152 ], [ 31.925411, -25.418994 ], [ 31.926308, -25.419551 ], [ 31.926683, -25.419273 ], [ 31.926621, -25.421106 ], [ 31.927174, -25.421519 ], [ 31.92766, -25.421455 ], [ 31.928034, -25.421613 ], [ 31.927649, -25.422004 ], [ 31.927968, -25.422138 ], [ 31.928382, -25.421754 ], [ 31.928911, -25.421977 ], [ 31.929349, -25.421426 ], [ 31.929644, -25.421439 ], [ 31.929778, -25.420918 ], [ 31.930086, -25.421777 ], [ 31.931573, -25.421838 ], [ 31.931399, -25.421245 ], [ 31.931747, -25.420579 ], [ 31.930796, -25.420083 ], [ 31.93097, -25.419357 ], [ 31.930475, -25.419309 ], [ 31.930756, -25.418958 ], [ 31.929912, -25.418414 ], [ 31.929791, -25.418051 ], [ 31.930434, -25.418014 ], [ 31.930662, -25.418232 ], [ 31.931345, -25.417978 ], [ 31.930917, -25.417252 ], [ 31.930542, -25.417179 ], [ 31.930649, -25.416853 ], [ 31.931332, -25.416284 ], [ 31.931144, -25.416006 ], [ 31.930582, -25.416163 ], [ 31.930394, -25.415969 ], [ 31.93014, -25.416018 ], [ 31.929939, -25.416429 ], [ 31.929778, -25.415885 ], [ 31.929256, -25.415897 ], [ 31.929323, -25.416393 ], [ 31.929041, -25.416441 ], [ 31.928827, -25.415437 ], [ 31.928559, -25.415413 ], [ 31.928452, -25.414735 ], [ 31.92746, -25.414759 ], [ 31.927045, -25.414409 ] ] ] } }
						,{style: function(feature) {return {color: "#ffffcc",stroke:false};},snakingSpeed: 600}),
						L.geoJson({ "type": "Feature", "properties": { "id": "c60b820e546c05f02a5d176684c6ab7a", "FID": null, "high": null, "measure": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 31.933428, -25.416099 ], [ 31.933765, -25.415947 ], [ 31.935374, -25.415822 ], [ 31.935857, -25.415386 ], [ 31.936585, -25.414978 ], [ 31.937029, -25.415227 ], [ 31.93706, -25.414798 ], [ 31.937197, -25.414784 ], [ 31.937305, -25.414605 ], [ 31.937887, -25.41466 ], [ 31.937826, -25.414771 ], [ 31.938316, -25.414784 ], [ 31.938684, -25.415435 ], [ 31.938362, -25.415573 ], [ 31.938147, -25.415864 ], [ 31.938745, -25.41621 ], [ 31.938147, -25.416722 ], [ 31.938393, -25.416833 ], [ 31.938055, -25.417192 ], [ 31.937672, -25.417027 ], [ 31.937335, -25.417178 ], [ 31.937182, -25.417649 ], [ 31.936738, -25.417483 ], [ 31.937013, -25.417096 ], [ 31.936891, -25.416736 ], [ 31.9366, -25.416736 ], [ 31.936584, -25.416321 ], [ 31.936002, -25.416487 ], [ 31.935527, -25.416265 ], [ 31.935206, -25.416417 ], [ 31.935114, -25.417096 ], [ 31.934685, -25.416902 ], [ 31.934064, -25.416743 ], [ 31.933597, -25.416334 ], [ 31.933428, -25.416099 ] ] ] } },{style: function(feature) {return {stroke:false};},snakingSpeed: 600}),
						L.popup({closeButton:false}).setLatLng([-25.41615, 31.9324]).setContent("250 metres")
					], {snakingPause: 20000});
					route.addTo(placeHolder).snakeIn();
				} else if ( this.props.triggerAnim > prevProps.triggerAnim) {
					this.state.map.flyTo([-25.945, 32.587],10)
					L.popup({closeButton:false,autoClose:false}).setLatLng([-25.850632,32.593871]).setContent("Maputo").openOn(this.state.map);
					L.popup({closeButton:false,autoClose:false}).setLatLng([-25.769408,32.420039]).setContent("Matola").openOn(this.state.map);
					L.popup({closeButton:false,autoClose:false}).setLatLng([-25.719644,32.674642]).setContent("Marracuene").openOn(this.state.map);
				}
			break;
		}


		// }
		// TREEMAP VALUE : 1
		// else if(this.props.treemapFilter === 'narrative' && this.props.treemapValue === 1) {
		// 		if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter || this.props.triggerAnim < prevProps.triggerAnim){	
		// 			placeHolder.clearLayers()
		// 			placeHolder.addLayer(this.state.tileLayer3)
		// 			this.state.map.setView([-25.419,31.932],16)
		// 			const route= L.featureGroup([
		// 				L.polyline([[-25.4162,31.9313],[-25.4161,31.9335]],{snakingSpeed: 100,dashArray:"5 10"}),
		// 				L.geoJson({ "type": "Feature", "properties": { "id": "c13e827f90781f7f86a9824cb6b9677e", "FID": null, "high": null, "measure": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 31.927045, -25.414409 ], [ 31.926121, -25.414856 ], [ 31.92588, -25.41551 ], [ 31.926027, -25.416175 ], [ 31.926442, -25.416296 ], [ 31.926429, -25.416574 ], [ 31.924638, -25.416726 ], [ 31.92471, -25.417146 ], [ 31.925238, -25.417207 ], [ 31.925277, -25.418486 ], [ 31.924754, -25.41851 ], [ 31.924794, -25.419152 ], [ 31.925411, -25.418994 ], [ 31.926308, -25.419551 ], [ 31.926683, -25.419273 ], [ 31.926621, -25.421106 ], [ 31.927174, -25.421519 ], [ 31.92766, -25.421455 ], [ 31.928034, -25.421613 ], [ 31.927649, -25.422004 ], [ 31.927968, -25.422138 ], [ 31.928382, -25.421754 ], [ 31.928911, -25.421977 ], [ 31.929349, -25.421426 ], [ 31.929644, -25.421439 ], [ 31.929778, -25.420918 ], [ 31.930086, -25.421777 ], [ 31.931573, -25.421838 ], [ 31.931399, -25.421245 ], [ 31.931747, -25.420579 ], [ 31.930796, -25.420083 ], [ 31.93097, -25.419357 ], [ 31.930475, -25.419309 ], [ 31.930756, -25.418958 ], [ 31.929912, -25.418414 ], [ 31.929791, -25.418051 ], [ 31.930434, -25.418014 ], [ 31.930662, -25.418232 ], [ 31.931345, -25.417978 ], [ 31.930917, -25.417252 ], [ 31.930542, -25.417179 ], [ 31.930649, -25.416853 ], [ 31.931332, -25.416284 ], [ 31.931144, -25.416006 ], [ 31.930582, -25.416163 ], [ 31.930394, -25.415969 ], [ 31.93014, -25.416018 ], [ 31.929939, -25.416429 ], [ 31.929778, -25.415885 ], [ 31.929256, -25.415897 ], [ 31.929323, -25.416393 ], [ 31.929041, -25.416441 ], [ 31.928827, -25.415437 ], [ 31.928559, -25.415413 ], [ 31.928452, -25.414735 ], [ 31.92746, -25.414759 ], [ 31.927045, -25.414409 ] ] ] } }
		// 				,{style: function(feature) {return {color: "#ffffcc",stroke:false};},snakingSpeed: 600}),
		// 				L.geoJson({ "type": "Feature", "properties": { "id": "c60b820e546c05f02a5d176684c6ab7a", "FID": null, "high": null, "measure": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 31.933428, -25.416099 ], [ 31.933765, -25.415947 ], [ 31.935374, -25.415822 ], [ 31.935857, -25.415386 ], [ 31.936585, -25.414978 ], [ 31.937029, -25.415227 ], [ 31.93706, -25.414798 ], [ 31.937197, -25.414784 ], [ 31.937305, -25.414605 ], [ 31.937887, -25.41466 ], [ 31.937826, -25.414771 ], [ 31.938316, -25.414784 ], [ 31.938684, -25.415435 ], [ 31.938362, -25.415573 ], [ 31.938147, -25.415864 ], [ 31.938745, -25.41621 ], [ 31.938147, -25.416722 ], [ 31.938393, -25.416833 ], [ 31.938055, -25.417192 ], [ 31.937672, -25.417027 ], [ 31.937335, -25.417178 ], [ 31.937182, -25.417649 ], [ 31.936738, -25.417483 ], [ 31.937013, -25.417096 ], [ 31.936891, -25.416736 ], [ 31.9366, -25.416736 ], [ 31.936584, -25.416321 ], [ 31.936002, -25.416487 ], [ 31.935527, -25.416265 ], [ 31.935206, -25.416417 ], [ 31.935114, -25.417096 ], [ 31.934685, -25.416902 ], [ 31.934064, -25.416743 ], [ 31.933597, -25.416334 ], [ 31.933428, -25.416099 ] ] ] } },{style: function(feature) {return {stroke:false};},snakingSpeed: 600}),
		// 				L.popup({closeButton:false}).setLatLng([-25.41615, 31.9324]).setContent("250 metres")
		// 			], {snakingPause: 20000});
		// 			route.addTo(placeHolder).snakeIn();
		// 		}else if (this.props.triggerAnim > prevProps.triggerAnim){
		// 			this.state.map.flyTo([-25.945, 32.587],10)
		// 			L.popup({closeButton:false,autoClose:false}).setLatLng([-25.850632,32.593871]).setContent("Maputo").openOn(this.state.map);
		// 			L.popup({closeButton:false,autoClose:false}).setLatLng([-25.769408,32.420039]).setContent("Matola").openOn(this.state.map);
		// 			L.popup({closeButton:false,autoClose:false}).setLatLng([-25.719644,32.674642]).setContent("Marracuene").openOn(this.state.map);
		// 		}
		// }
		// //TREEMAP VALUE : 2
		// else if (this.props.treemapFilter === 'narrative' && this.props.treemapValue === 2){
		// 	if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter){
		// 		placeHolder.clearLayers()
		// 		placeHolder.addLayer(this.state.tileLayer3)
		// 		this.state.map.flyTo([5.75372, 6.993606],10)}
		// }
		// //TREEMAP VALUE : 3
		// else if (this.props.treemapFilter === 'narrative' && this.props.treemapValue === 3){

		// 	if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter){
		// 		placeHolder.clearLayers()
		// 		placeHolder.addLayer(this.state.tileLayer4)
		// 		this.state.map.setView([1.46,18.3],3)
		// 	}else if (this.props.triggerAnim > prevProps.triggerAnim){
		// 		placeHolder.addLayer(this.abovefive)
		// 	}else if (this.props.triggerAnim < prevProps.triggerAnim){
		// 		placeHolder.removeLayer(this.abovefive)
		// 	}

		// }
		// //TREEMAP VALUE : 4
		// else if (this.props.treemapFilter === 'narrative' && this.props.treemapValue === 4){
		// 	if (prevProps.treemapValue !== this.props.treemapValue || prevProps.treemapFilter !== this.props.treemapFilter){
		// 		placeHolder.clearLayers()
		// 		placeHolder.addLayer(this.state.tileLayer3)
		// 		this.state.map.setView([1.46,18.3],3)}
		// 	}
		// }
	}


	// treemap_onEachFeature(feature,layer){
	// 	if(feature.geometry.type==="MultiPolygon"){
	// 		layer.setStyle({fillColor: feature.properties.Color,color:feature.properties.Color,weight:0.5})
	// 	} else {
	// 		layer.on('mouseover', (e) => {
	// 		e.target.setStyle(this.treemapHighlightStyle(feature))
	// 		layer.bindTooltip(popupContent).openTooltip();
	// 		})

	// 		layer.on('mouseout', (e) => {
	// 			e.target.setStyle(this.treemapAgglosStyle(feature))
	// 		})

	// 		layer.on('click', (e) => {
	// 			e.target.setStyle(this.treemapHighlightStyle(feature))
	// 			this.state.map.setView(layer._latlng, 10);
	// 		})

	// 		let popupContent = "<table class='tooltip-table'>";
	// 		popupContent += "<tr><td class='title'></td>" + feature.properties.NAME + "</tr>";
	// 		popupContent += "</table>";
	// 		layer.bindPopup(popupContent).openPopup();
	// 		layer._leaflet_id = feature.properties.City_ID;
	// 	}
	// }

	onEachFeature_f(feature,layer){
		let popupContent = "<tr><td class='title'></td>" + "Name: " + feature.properties.Name + "</tr>";
		popupContent += "</br><tr><td class='title'></td>" + "Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</tr>";
		layer.bindPopup(popupContent).openPopup();
	}

	treemapHighlightStyle(feature){
		return({
			radius: 13,
			fillOpacity: .9,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemapAgglosStyle(feature){
		return({
			radius: 4,
			fillColor: feature.properties.Color,
			fillOpacity: 0.4,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemap_pointToLayer(feature, latlng){
		if(feature.geometry.type==="MultiPolygon") {
			feature.setstyle({fillColor: feature.properties.Color})
		} else {
			const geojsonMarker = this.treemapAgglosStyle(feature);
			return L.circleMarker(latlng, geojsonMarker);
	}}

	abovefive_pointToLayer(feature, latlng){

			const geojsonMarker = 		{
				radius: 10,
				fillColor: '#225ea8',
				fillOpacity: 0.4,
				stroke: true,
				color: '#225ea8',
				weight: 2,
			};
			return L.circleMarker(latlng, geojsonMarker);
	}

	treemap_filter(feature) {
		if (feature.properties.treemap_ID === this.props.treemapValue ) {
			return true
		}
	}

	render() {
		return (
			<div id="map"/>



		)
	}
}

export default LeafletMap;
