import React, { Component } from 'react';
import  L  from 'leaflet';
import 'leaflet-easyprint';
import 'leaflet-easybutton';
import '../../shared/leaflet.snogylop.js';
import "../../../node_modules/leaflet/dist/leaflet.css";

const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 52);
const mybounds = L.latLngBounds(southWest, northEast);

let config = {};
config.params = {
	center: [1.46,18.3],
	zoom: 3,
	zoomSnap: 0.1,
	minZoom: 3,
	maxBounds:mybounds,
	opacity:0
};

config.tileLayer = {
	uri: 'https://api.mapbox.com/styles/v1/mkmd/cjj041lbo07vo2rphltlukpya/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
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
		};
	}

	componentDidMount() {
		let map = L.map('map', config.params);

		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
		this.setState({ map, tileLayer });
		// this.mapShades = L.geoJson([{ "features": [ { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 55.999999, 39.032555 ], [ 55.111111, -40.88617 ], [ 132.888888, -41.221321 ], [ 127.555555, 39.032555 ], [ 55.999999, 39.032555 ] ] ], "type": "Polygon" }, "id": "0a5395b9795cc210b0e8540cd0fd01a6" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -83.333333, -38.318386 ], [ 131.777777, -39.699725 ], [ 134.666666, -69.265164 ], [ -83.333333, -68.948166 ], [ -83.333333, -38.318386 ] ] ], "type": "Polygon" }, "id": "1b41ae972091a3f54019ba89e52d4839" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -51.555555, 38.238938 ], [ 127.111111, 36.472684 ], [ 128.888888, 69.619781 ], [ -52, 69.697029 ], [ -51.555555, 38.238938 ] ] ], "type": "Polygon" }, "id": "2067f42a2f136630a9bf2d48ab1451d4" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -11.5, 38.777802 ], [ -11.333333, 35.68223 ], [ -0.555555, 36.177066 ], [ 0.666666, 39.338607 ], [ -11.5, 38.777802 ] ] ], "type": "Polygon" }, "id": "2bad9fee6765f4c9e3a7c29160de0e17" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -35.777777, 74.244811 ], [ -31.999999, -70.495533 ], [ -179.999999, -70.569593 ], [ -179.333333, 74.062775 ], [ -35.777777, 74.244811 ] ] ], "type": "Polygon" }, "id": "6d21dc6b147e8054ffee61ae8d8a3c71" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 128.222222, -69.107193 ], [ 179.777777, -69.885473 ], [ 179.777777, 70.570809 ], [ 125.777777, 70.197809 ], [ 128.222222, -69.107193 ] ] ], "type": "Polygon" }, "id": "74de7d66710dcdf06ec2fabf01e2faf3" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 11.666666, 38.386948 ], [ 14.333333, 34.317034 ], [ 34.055555, 32.508604 ], [ 37.944444, 37.906353 ], [ 11.666666, 38.386948 ] ] ], "type": "Polygon" }, "id": "b2a0d7259e5861f0b66a1465418a728d" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ 33.814697, 32.910195 ], [ 39.703585, 16.432828 ], [ 44.981363, 11.147418 ], [ 68.925808, 22.761619 ], [ 58.536919, 40.105022 ], [ 37.259141, 41.228204 ], [ 32.925808, 38.760087 ], [ 33.814697, 32.910195 ] ] ], "type": "Polygon" }, "id": "c0e15b531e20f2d8f269e3a8c9764d1d" }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [ [ [ -178.666666, 39.699625 ], [ -179.333333, 84.972705 ], [ 179.777777, 84.753881 ], [ 179.777777, 38.143724 ], [ 179.777777, 36.375204 ], [ -178.666666, 39.699625 ] ] ], "type": "Polygon" }, "id": "f33983aca6dc41c657a0b8f478aa4092" } ], "type": "FeatureCollection" }],
		// { "color": "#787878", "weight": 0,"opacity": 1,"fillOpacity": 1} )
		// this.mapShades.addTo(map);

		this.placeHolder = L.featureGroup();
		this.placeHolder_selected = L.featureGroup();
		this.placeHolder.addTo(map);
		this.placeHolder_selected.addTo(map);

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
		} else {
			logoType='OECD_White_FR'
		}
		const logo = L.control({position: 'bottomleft'});
		logo.onAdd = function(map){
		let div = L.DomUtil.create('div', 'oecd_logo');
		div.innerHTML=  "<img src='../../assets/images/" + logoType + ".png' width='50%' alt='Africapolis Visualise Urbanisation in Africa'/>";
			return div;
		}
		logo.addTo(map);
	}

	componentDidUpdate(prevProps, prevState){

        let { selectedCountry, selectedAgglos, timeSliderValue } = this.props;
		let prevCountryValue = prevProps.selectedCountry;
		let prevAgglosValue = prevProps.selectedAgglos;
		let Size = [];
		for(var i = 0; i < 9086; i++) {
			if(this.props.agglosGeo[0]["features"][i]["properties"]["Size_sel"]) {
				delete this.props.agglosGeo[0]["features"][i]["properties"]["Size_sel"];
			}
			Object.defineProperty(this.props.agglosGeo[0]["features"][i]["properties"], "Size_sel",
			Object.getOwnPropertyDescriptor(this.props.agglosGeo[0]["features"][i]["properties"], "Size" + timeSliderValue));
		}

        this.mapOverlay = L.geoJson(this.props.africaContinent, {
            style: () => {return {color: 'transparent'}},
            onEachFeature: (feature, layer) => {


                layer.on('mouseover', () => {
                    layer.setStyle(this.hoverStyle());
                });

                layer.on('mouseout', (e) => {
                    this.mapOverlay.resetStyle(e.target);
                });

                layer.on('change', (e) => {

                    this.placeHolder.removeLayer(this.agglos);
										this.placeHolder_selected.clearLayers();

                    this.state.map.fitBounds(layer.getBounds());
                    this.ID = feature.properties.ID;

										this.mapOverlay_selected = L.geoJson(this.props.africaContinent, {filter: (feature) => {if (feature.properties.ID === this.ID){return true}}, style: this.hoverStyle()})
										this.placeHolder_selected.addLayer(this.mapOverlay_selected)

                    this.agglos = L.geoJson(this.props.agglosGeo, {
                        onEachFeature: (feature, layer) => {
                            Size.push(feature.properties.Size_sel);

                            layer._leaflet_id = feature.properties.City_ID;
                            layer.on('mouseover', (e) => {
															e.target.setStyle(this.highlightAgglosStyle(feature))
															let popupContent = "<table margin={{top: -20, right: 0, left: 0, bottom: 0}}>"; //feature.properties.NAME
															popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + " [" + feature.properties.ISO + "] </td></tr>";
															popupContent += "<tr></td><td class='data'>Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</td></tr>";
															popupContent += "<tr></td><td class='data'>Rank: <b>" + feature.properties.Rank + "</b>/" + feature.properties.Total+"</td></tr>";
															popupContent += "</table>";

															// let popupContent = "<table margin={{top: -20, right: 0, left: 0, bottom: 0}}>"; //feature.properties.NAME
															// popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + " [" + feature.properties.ISO + "] </td></tr>";
															// popupContent += "<tr></td><td class='data'>Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</td></tr>";
															// popupContent += "<tr></td><td class='data'>Rank: <b>" + feature.properties.Rank + "</b>/" + feature.properties.Total+"</td></tr>";
															// popupContent += "</table>";

                                layer.bindTooltip(popupContent,{closeButton:false}).openTooltip();
                            })

                            layer.on('mouseout', (e) => {
                                e.target.setStyle(this.defaultAgglosStyle(feature))
                            })

                            layer.on('change', () => {
                                e.target.setStyle(this.selectedAgglosStyle())
                            })

                            layer.on('click', (e) => {
                                const cityID = feature.properties.City_ID;
                                const cityName = feature.properties.NAME;
                                const value = { value:cityID, label:cityName}
                                this.props.agglosValueToMap(value);
                                this.state.map.setView(layer._latlng, 12);
																let popupContent = "<table margin={{top: -20, right: 0, left: 0, bottom: 0}}>";//feature.properties.NAME
																									popupContent += "<tr></td><td class='data'>" + feature.properties.NAME + " [" + feature.properties.ISO + "] </td></tr>";
																popupContent += "<tr></td><td class='data'>Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</td></tr>";
																popupContent += "<tr></td><td class='data'>Rank: <b>" + feature.properties.Rank + "</b>/" + feature.properties.Total+"</td></tr>";
                                    popupContent += "</table>";
                                layer.bindTooltip(popupContent,{closeButton:false}).openTooltip();
                            })
                        },
                        filter: this.agglosFilter,
                        pointToLayer: this.agglos_pointToLayer
                    });

                    this.props.sizeArray(Size);
                    this.placeHolder.addLayer(this.agglos);
                });

                layer.on('click', () => {
                    const ISO3_ID = feature.properties.ID;
                    const ISO3_NAME = feature.properties.NAME_EN;
                    const e = { value: ISO3_ID, label:ISO3_NAME}
                    this.props.sendCountryValueToContent(e);
                });
                layer._leaflet_id = feature.properties.ID+"con";
            }
        });
        this.placeHolder.addLayer(this.mapOverlay);

		//COUNTRY layer trigger
		if(selectedCountry !== prevCountryValue && selectedCountry !== ''){
			let layer = this.mapOverlay.getLayer(selectedCountry+"con");
			layer.fire('change')
		}else if (selectedCountry !== prevCountryValue && selectedCountry === ''){
			this.placeHolder.clearLayers();
		}

		//AGGLOMERATION layer trigger
		if (selectedAgglos !== prevAgglosValue && selectedAgglos !== ''){
			let agglosLayer = this.agglos.getLayer(selectedAgglos)
			agglosLayer.fire('click');
		}

		//Time slider trigger
		if (this.props.timeSliderValue !== prevProps.timeSliderValue){
			let layer = this.mapOverlay.getLayer(selectedCountry+"con");
			if (layer) {layer.fire('change')}
		};
	};

	hoverStyle = () => {
		return({
			color: '#E8AE40',
			weight: 3,
			stroke:true,
			fillOpacity: 0,
		})
	};

	agglosFilter = (feature) => {
		if (feature.properties.ID === this.ID){
			return true
		}
		else if (this.ID === 55) {
			for(let region of [3,4,7,10,18,19,20,21,23,27,32,33,36,37,43]) {
				if(feature.properties.ID === region){
					return true
				}
			}
		}
		else if (this.ID === 51) {
			for(let region of [1,5,25,28,30,31,41,47,49,50]) {
				if(feature.properties.ID === region){
					return true
				}
			}
		} else if (this.ID === 53){
			for(let region of [12,13,24,26,29,44]) {
				if(feature.properties.ID === region){
					return true
				}
			}
		}
		else if (this.ID === 52){
			for(let region of [11,14,15,22,34,40,38,35,45,46]) {
				if(feature.properties.ID === region){
					return true
				}
			}
		} else if (this.ID === 54) {
			for(let region of [2,6,8,48,9,16,17,39,42]) {
				if(feature.properties.ID === region){
					return true
				}
			}
		} else if (this.ID === 56) {
			for(let region of [3,4,7,10,18,19,20,21,23,27,32,33,36,37,43,29,42])
			{if(feature.properties.ID === region){
				return true
				}	}	}

	}

	agglos_pointToLayer = (feature, latlng) => {
		const geojsonMarker = this.defaultAgglosStyle(feature);
		return L.circleMarker(latlng, geojsonMarker);
	}

	highlightAgglosStyle = (feature) => {
		return({
			radius: feature.properties.Size_sel*3+6,
			// fillColor: '#E8AE40',
			fillOpacity: 1,
			stroke: true,
			// color: '#E8AE40',
			weight: 1,
		})
	}

	selectedAgglosStyle = () =>{
		return({
			radius: 20,
			fillColor: 'red',
			fillOpacity: 0.4,
			stroke: true,
			color: '#E8AE40',
			weight: 1,
		})
	}

	defaultAgglosStyle = (feature) => {
		return({
			radius: this.getRadius(feature.properties.Size_sel),
			fillColor: this.getColor(feature.properties.Size_sel),
			fillOpacity: 0.4,
			stroke: true,
			color: this.getColor(feature.properties.Size_sel),
			weight: 1,
		})
	}

	getRadius = (d) => {
		return(
			d === 6 ? d*3 :
			d === 5 ? d*3 :
			d === 4 ? d*3 :
			d === 3 ? d*3 :
			d === 2 ? d*3 :
			d === 1 ? d*3 : d*10
		)
	}

	getColor = (d) => {
		return(
			d === 6 ? '#1d91c0' :
			d === 5 ? '#41b6c4' :
			d === 4 ? '#7fcdbb' :
			d === 3 ? '#c7e9b4' :
			d === 2 ? '#ffffcc' :
			d === 1 ? '#f2f1e7' : ''
		)
	}

	render() { return ( <div id="map"/> ) }
}

export default LeafletMap;
