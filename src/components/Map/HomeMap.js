import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import 'leaflet-easyprint';
import 'leaflet-measure';
import 'leaflet-easybutton';
import 'leaflet.polyline.snakeanim'
import '../../shared/leaflet.snogylop.js';
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet-measure/dist/leaflet-measure.css";
import "../../../node_modules/leaflet-measure/dist/leaflet-measure.en_UK.js";

const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 52);
const mybounds = L.latLngBounds(southWest, northEast);

let config = {};
config.params = {
	center: [1.46,18.3],
	zoom: 4,
	zoomSnap: 0.1,
	minZoom: 3,
	maxBounds:mybounds,
	opacity:0,
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

class HomeMap extends Component {
	constructor(props){
		super(props)
		this.state = {
			map: null,
		};
	}

	componentDidMount() {
		let map = L.map('map', config.params);
		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params)
		const tileLayer2 = L.tileLayer(config.tileLayer.uri2, config.tileLayer.params)
		const tileLayer3 = L.tileLayer(config.tileLayer.uri3, config.tileLayer.params)
		const tileLayer4 = L.tileLayer(config.tileLayer.uri4, config.tileLayer.params)
		this.setState({ map, tileLayer, tileLayer2, tileLayer3, tileLayer4});
		// this.mapShades = L.geoJson([{ "features": [ { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 55.999999, 39.032555 ], [ 55.111111, -40.88617 ], [ 132.888888, -41.221321 ], [ 127.555555, 39.032555 ], [ 55.999999, 39.032555 ] ] ], "type": "Polygon" }, "id": "0a5395b9795cc210b0e8540cd0fd01a6" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -83.333333, -38.318386 ], [ 131.777777, -39.699725 ], [ 134.666666, -69.265164 ], [ -83.333333, -68.948166 ], [ -83.333333, -38.318386 ] ] ], "type": "Polygon" }, "id": "1b41ae972091a3f54019ba89e52d4839" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -51.555555, 38.238938 ], [ 127.111111, 36.472684 ], [ 128.888888, 69.619781 ], [ -52, 69.697029 ], [ -51.555555, 38.238938 ] ] ], "type": "Polygon" }, "id": "2067f42a2f136630a9bf2d48ab1451d4" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -11.5, 38.777802 ], [ -11.333333, 35.68223 ], [ -0.555555, 36.177066 ], [ 0.666666, 39.338607 ], [ -11.5, 38.777802 ] ] ], "type": "Polygon" }, "id": "2bad9fee6765f4c9e3a7c29160de0e17" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -35.777777, 74.244811 ], [ -31.999999, -70.495533 ], [ -179.999999, -70.569593 ], [ -179.333333, 74.062775 ], [ -35.777777, 74.244811 ] ] ], "type": "Polygon" }, "id": "6d21dc6b147e8054ffee61ae8d8a3c71" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 128.222222, -69.107193 ], [ 179.777777, -69.885473 ], [ 179.777777, 70.570809 ], [ 125.777777, 70.197809 ], [ 128.222222, -69.107193 ] ] ], "type": "Polygon" }, "id": "74de7d66710dcdf06ec2fabf01e2faf3" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 11.666666, 38.386948 ], [ 14.333333, 34.317034 ], [ 34.055555, 32.508604 ], [ 37.944444, 37.906353 ], [ 11.666666, 38.386948 ] ] ], "type": "Polygon" }, "id": "b2a0d7259e5861f0b66a1465418a728d" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 33.814697, 32.910195 ], [ 39.703585, 16.432828 ], [ 44.981363, 11.147418 ], [ 68.925808, 22.761619 ], [ 58.536919, 40.105022 ], [ 37.259141, 41.228204 ], [ 32.925808, 38.760087 ], [ 33.814697, 32.910195 ] ] ], "type": "Polygon" }, "id": "c0e15b531e20f2d8f269e3a8c9764d1d" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -178.666666, 39.699625 ], [ -179.333333, 84.972705 ], [ 179.777777, 84.753881 ], [ 179.777777, 38.143724 ], [ 179.777777, 36.375204 ], [ -178.666666, 39.699625 ] ] ], "type": "Polygon" }, "id": "f33983aca6dc41c657a0b8f478aa4092" } ], "type": "FeatureCollection" }],
		// { "color": "#787878", "weight": 0,"opacity": 1,"fillOpacity": 1} )
		// this.mapShades.addTo(map);
		this.placeHolder = L.featureGroup();
		this.placeHolder.addTo(map);
		this.placeHolder.addLayer(tileLayer);

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

		let measureControl = new L.Control.Measure({ decPoint: '.', thousandsSep: ' ' ,position: 'topleft',primaryLengthUnit: 'kilometers',secondaryLengthUnit: undefined,primaryAreaUnit: 'sqkm', secondaryAreaUnit: undefined,
		units:{
		sqkm:  {
		 factor: 0.000001, // Required. Factor to apply when converting to this unit. Length in meters or area in sq meters will be multiplied by this factor.
		 display: 'Square kilometres', // Required. How to display in results, like.. "300 Meters (0.3 My New Unit)".
		 decimals: 0 // Number of decimals to round results when using this unit. `0` is the default value if not specified.
	 }}

	});
		measureControl.addTo(map);

		const printer = L.easyPrint({
			sizeModes: ['Current'],
			filename: 'Africapolis',
			exportOnly: true,
			hideControlContainer: true,
			hidden: true,
			customWindowTitle: "Copyright: SWAC"
		}).addTo(map);

		let logoType = 'OECD_White_EN'
		if(this.props.lang === 0) { logoType = 'OECD_White_EN'
		} else { logoType='OECD_White_FR' }
		const logo = L.control({position: 'bottomleft'});
		logo.onAdd = function(map){
		let div = L.DomUtil.create('div', 'oecd_logo');
		div.innerHTML=  "<img src='../../assets/images/" + logoType + ".png' width='50%' alt='Africapolis Visualise Urbanisation in Africa'/>";
			return div;
		}
		logo.addTo(map);

    }

    shouldComponentUpdate(nextProps, nextState){
        if((this.props.mixerOpen !== nextProps.mixerOpen) && (nextProps.path === this.props.path)) {
            return false;
        }
        return true;
    }

	componentDidUpdate(prevProps, prevState){
			this.placeHolder.removeLayer(this.tileLayer2)
			if(this.treemap)
			{this.placeHolder.removeLayer(this.treemap)}
			this.state.map.dragging.disable();
			this.state.map.touchZoom.disable();
			this.state.map.doubleClickZoom.disable();
			this.state.map.scrollWheelZoom.disable();
			this.state.map.boxZoom.disable();
			this.state.map.keyboard.disable();

        let path = this.props.path;
        let triggerAnim = this.props.triggerAnim;
        if(path === '/home' || path === '/home/africapolis'){

            this.state.map.setView([1.46,18.3],3)
            if (prevProps.path !== this.props.path){
                    this.placeHolder.clearLayers()
                    this.placeHolder.addLayer(this.state.tileLayer)
                }
            if (triggerAnim > prevProps.triggerAnim){
                this.placeHolder.addLayer(this.state.tileLayer3);
            }else if (triggerAnim < prevProps.triggerAnim){
                this.placeHolder.removeLayer(this.state.tileLayer3);
                this.placeHolder.addLayer(this.state.tileLayer);
            }

        } else if( path === '/home/defining_urban') {
            if( prevProps.path !== path ||
                triggerAnim < prevProps.triggerAnim ||
                triggerAnim=== undefined) {

                this.placeHolder.clearLayers()
                this.placeHolder.addLayer(this.state.tileLayer3)
                this.state.map.setView([-25.419,31.932],16)
                const route= L.featureGroup([
                    L.polyline([[-25.4162,31.9313],[-25.4161,31.9335]],{snakingSpeed: 100,dashArray:"5 10"}),
                    L.geoJson({ "type": "Feature", "properties": { "id": "c13e827f90781f7f86a9824cb6b9677e", "FID": null, "high": null, "measure": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 31.927045, -25.414409 ], [ 31.926121, -25.414856 ], [ 31.92588, -25.41551 ], [ 31.926027, -25.416175 ], [ 31.926442, -25.416296 ], [ 31.926429, -25.416574 ], [ 31.924638, -25.416726 ], [ 31.92471, -25.417146 ], [ 31.925238, -25.417207 ], [ 31.925277, -25.418486 ], [ 31.924754, -25.41851 ], [ 31.924794, -25.419152 ], [ 31.925411, -25.418994 ], [ 31.926308, -25.419551 ], [ 31.926683, -25.419273 ], [ 31.926621, -25.421106 ], [ 31.927174, -25.421519 ], [ 31.92766, -25.421455 ], [ 31.928034, -25.421613 ], [ 31.927649, -25.422004 ], [ 31.927968, -25.422138 ], [ 31.928382, -25.421754 ], [ 31.928911, -25.421977 ], [ 31.929349, -25.421426 ], [ 31.929644, -25.421439 ], [ 31.929778, -25.420918 ], [ 31.930086, -25.421777 ], [ 31.931573, -25.421838 ], [ 31.931399, -25.421245 ], [ 31.931747, -25.420579 ], [ 31.930796, -25.420083 ], [ 31.93097, -25.419357 ], [ 31.930475, -25.419309 ], [ 31.930756, -25.418958 ], [ 31.929912, -25.418414 ], [ 31.929791, -25.418051 ], [ 31.930434, -25.418014 ], [ 31.930662, -25.418232 ], [ 31.931345, -25.417978 ], [ 31.930917, -25.417252 ], [ 31.930542, -25.417179 ], [ 31.930649, -25.416853 ], [ 31.931332, -25.416284 ], [ 31.931144, -25.416006 ], [ 31.930582, -25.416163 ], [ 31.930394, -25.415969 ], [ 31.93014, -25.416018 ], [ 31.929939, -25.416429 ], [ 31.929778, -25.415885 ], [ 31.929256, -25.415897 ], [ 31.929323, -25.416393 ], [ 31.929041, -25.416441 ], [ 31.928827, -25.415437 ], [ 31.928559, -25.415413 ], [ 31.928452, -25.414735 ], [ 31.92746, -25.414759 ], [ 31.927045, -25.414409 ] ] ] } }
                    ,{style: function(feature) {return {color: "#ffffcc",stroke:false};},snakingSpeed: 600}),
                    L.geoJson({ "type": "Feature", "properties": { "id": "c60b820e546c05f02a5d176684c6ab7a", "FID": null, "high": null, "measure": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 31.933428, -25.416099 ], [ 31.933765, -25.415947 ], [ 31.935374, -25.415822 ], [ 31.935857, -25.415386 ], [ 31.936585, -25.414978 ], [ 31.937029, -25.415227 ], [ 31.93706, -25.414798 ], [ 31.937197, -25.414784 ], [ 31.937305, -25.414605 ], [ 31.937887, -25.41466 ], [ 31.937826, -25.414771 ], [ 31.938316, -25.414784 ], [ 31.938684, -25.415435 ], [ 31.938362, -25.415573 ], [ 31.938147, -25.415864 ], [ 31.938745, -25.41621 ], [ 31.938147, -25.416722 ], [ 31.938393, -25.416833 ], [ 31.938055, -25.417192 ], [ 31.937672, -25.417027 ], [ 31.937335, -25.417178 ], [ 31.937182, -25.417649 ], [ 31.936738, -25.417483 ], [ 31.937013, -25.417096 ], [ 31.936891, -25.416736 ], [ 31.9366, -25.416736 ], [ 31.936584, -25.416321 ], [ 31.936002, -25.416487 ], [ 31.935527, -25.416265 ], [ 31.935206, -25.416417 ], [ 31.935114, -25.417096 ], [ 31.934685, -25.416902 ], [ 31.934064, -25.416743 ], [ 31.933597, -25.416334 ], [ 31.933428, -25.416099 ] ] ] } },{style: function(feature) {return {stroke:false};},snakingSpeed: 600}),
                    L.popup({closeButton:false}).setLatLng([-25.41615, 31.9324]).setContent("250 metres")
                ], {snakingPause: 20000});
                route.addTo(this.placeHolder).snakeIn();

            } else if (triggerAnim > prevProps.triggerAnim) {
                this.state.map.flyTo([-25.945, 32.587],10)
                L.popup({closeButton:false,autoClose:false}).setLatLng([-25.850632,32.593871]).setContent("Maputo").openOn(this.state.map);
                L.popup({closeButton:false,autoClose:false}).setLatLng([-25.769408,32.420039]).setContent("Matola").openOn(this.state.map);
                L.popup({closeButton:false,autoClose:false}).setLatLng([-25.719644,32.674642]).setContent("Marracuene").openOn(this.state.map);
            }

		}else if (path === '/home/urbanisation_dynamics_and_drivers'){
			if (prevProps.path !== path || triggerAnim === undefined){
				this.placeHolder.clearLayers()
				this.placeHolder.addLayer(this.state.tileLayer3)
                this.state.map.flyTo([5.75372, 6.993606],10)
            }

		}else if ( path === '/home/beyond_large_cities'){
			if (prevProps.path !== path || triggerAnim === undefined){
				this.placeHolder.clearLayers()
				this.placeHolder.addLayer(this.state.tileLayer4)
				this.state.map.setView([1.46,18.3],3)
			}else if (triggerAnim > prevProps.triggerAnim){
				this.placeHolder.addLayer(this.abovefive)
			}else if (triggerAnim < prevProps.triggerAnim){
				this.placeHolder.removeLayer(this.abovefive)
			}

		}else if ( path === '/home/about_the_data'){
			if (prevProps.path !== this.props.path || triggerAnim === undefined){
				this.placeHolder.clearLayers()
				this.placeHolder.addLayer(this.state.tileLayer3)
				this.state.map.setView([1.46,18.3],3)}
			}
	}

	onEachFeature_f = (feature,layer) =>{
		let popupContent = "<tr><td class='title'></td>" + "Name: " + feature.properties.Name + "</tr>";
		popupContent += "</br><tr><td class='title'></td>" + "Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</tr>";
		layer.bindPopup(popupContent).openPopup();
	}

	abovefive_pointToLayer = (feature, latlng) => {
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

	render() { return ( <div id="map"/> ) }
}

export default HomeMap;
