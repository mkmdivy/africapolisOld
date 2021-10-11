import React from 'react';
import { Component } from 'react';
import  L  from 'leaflet';
import '../../shared/leaflet.snogylop.js';
import "../../../node_modules/leaflet/dist/leaflet.css";



const southWest = L.latLng(-48.739134, -29.058270);
const northEast = L.latLng(42.157281, 52);
const mybounds = L.latLngBounds(southWest, northEast);

let config = {};
config.params = {
	center: [1.46,18.3],
	zoom: 3,
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
	uri_Rafael_120km: 'https://api.mapbox.com/styles/v1/mkmd/cjpkpcc6h079n2sn6sflsolgd/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri_Rafael_637km: 'https://api.mapbox.com/styles/v1/mkmd/cjptexpju5b7u2rp424paa4cf/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	uri_crossborder:  'https://api.mapbox.com/styles/v1/mkmd/cjrbxwtov1m9s2tmchngulnaq/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
  uri_distMetro:  'https://api.mapbox.com/styles/v1/mkmd/ck5s0qtom0jo61inyejwpi782/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA',
	params: {
		maxZoom: 18,
		tileSize: 512,
	  zoomOffset: -1,
	}
};

class ResearchMap extends Component {
	constructor(props){
		super(props)
		this.state = { map: null };
	}

	componentDidMount() {
		let map = L.map('map', config.params);

		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params);
		const tileLayer2 = L.tileLayer(config.tileLayer.uri2, config.tileLayer.params);
		const tileLayer3 = L.tileLayer(config.tileLayer.uri3, config.tileLayer.params);
		const tileLayer4 = L.tileLayer(config.tileLayer.uri4, config.tileLayer.params);
		const tileLayer_Rafael_120km = L.tileLayer(config.tileLayer.uri_Rafael_120km, config.tileLayer.params);
		const tileLayer_Rafael_637km = L.tileLayer(config.tileLayer.uri_Rafael_637km, config.tileLayer.params);
		const tileLayer_crossborder = L.tileLayer(config.tileLayer.uri_crossborder, config.tileLayer.params);
		const tileLayer_distMetro = L.tileLayer(config.tileLayer.uri_distMetro, config.tileLayer.params);
		this.setState({ map, tileLayer, tileLayer2, tileLayer3, tileLayer4, tileLayer_Rafael_637km, tileLayer_Rafael_120km, tileLayer_crossborder,tileLayer_distMetro});
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

		let measureControl = new L.Control.Measure({position: 'topleft',primaryLengthUnit: 'kilometers',secondaryLengthUnit: undefined,primaryAreaUnit: 'sqkm', secondaryAreaUnit: undefined,
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

	componentDidUpdate(prevProps, prevState){
		let { clickedValue, hoveredValue } = this.props;

		if(this.props.treemapValue < 4) {
			this.state.map.setView([1.46,18.3],3)
			this.placeHolder.removeLayer(this.state.tileLayer)
			this.placeHolder.removeLayer(this.state.tileLayer3);
			this.placeHolder.removeLayer(this.state.tileLayer_Rafael_120km);
			this.placeHolder.removeLayer(this.state.tileLayer_Rafael_637km)
			this.placeHolder.removeLayer(this.state.tileLayer_crossborder)
			this.placeHolder.removeLayer(this.state.tileLayer_distMetro)
			this.placeHolder.addLayer(this.state.tileLayer2)

			if(this.props.treemapFilter === 'treemap') {

				if(this.treemap){
					this.treemap.clearLayers(this.treemap);
				}
				this.state.map.dragging.enable();
				this.state.map.touchZoom.enable();
				this.state.map.doubleClickZoom.enable();
				this.state.map.scrollWheelZoom.enable();
				this.state.map.boxZoom.enable();
				this.state.map.keyboard.enable();
				this.treemap = L.geoJson(this.props.treemap_buildup, {
					filter: this.treemap_filter,
					onEachFeature: this.treemap_onEachFeature,
					pointToLayer: this.treemap_pointToLayer})
				this.placeHolder.addLayer(this.treemap);
			}

			if ( clickedValue ) {
				if ( prevProps.clickedValue !== clickedValue ) {
					let layer = this.treemap.getLayer( clickedValue );
					if(layer) {
						this.state.map.setView(layer._latlng, 10);
						layer.fire('click')}
						clickedValue = null;
						layer=null;
				}
			}

			if ( hoveredValue ){
				this.currLayer = this.treemap.getLayer( hoveredValue );
				this.prevLayer = this.treemap.getLayer( prevProps.hoveredValue );
			}

			if ( hoveredValue !== prevProps.hoveredValue && this.props.treemapValue < 4 ){
				let layer = this.treemap.getLayer(hoveredValue);
				layer.fire('mouseover')

				if ( prevProps.hoveredValue ){
					let prevLayer = this.treemap.getLayer( prevProps.hoveredValue );
					if(prevLayer){
						prevLayer.fire('mouseout')
					}
				}
			}

		} else if ( this.props.treemapValue === 4 ) {
			if (this.treemap){
				this.treemap.clearLayers(this.treemap);
			}
			if ( this.props.triggerAnim === undefined || this.props.triggerAnim === 1 ) {
				this.placeHolder.removeLayer(this.state.tileLayer_Rafael_637km)
				this.placeHolder.addLayer(this.state.tileLayer_Rafael_120km)
			} else if ( this.props.triggerAnim > prevProps.triggerAnim){
				this.placeHolder.removeLayer(this.state.tileLayer_Rafael_120km)
				this.placeHolder.addLayer(this.state.tileLayer_Rafael_637km)
			}

		} else if(this.props.treemapValue === 5 ) {
			if(this.treemap){
				this.treemap.clearLayers(this.treemap);
			}
			this.placeHolder.removeLayer(this.state.tileLayer)
			this.placeHolder.removeLayer(this.state.tileLayer3);
			this.placeHolder.removeLayer(this.state.tileLayer_Rafael_120km);
			this.placeHolder.removeLayer(this.state.tileLayer_Rafael_637km)
			this.placeHolder.removeLayer(this.state.tileLayer_distMetro)
			this.placeHolder.addLayer(this.state.tileLayer_crossborder)
		} else if(this.props.treemapValue === 6 ) {
			if(this.treemap){
				this.treemap.clearLayers(this.treemap);
			}
			this.placeHolder.removeLayer(this.state.tileLayer)
			this.placeHolder.removeLayer(this.state.tileLayer3);
			this.placeHolder.removeLayer(this.state.tileLayer_Rafael_120km);
			this.placeHolder.removeLayer(this.state.tileLayer_Rafael_637km)
			this.placeHolder.removeLayer(this.state.tileLayer_crossborder)
			this.placeHolder.addLayer(this.state.tileLayer_distMetro)
		}
	}

	treemap_onEachFeature = (feature,layer) => {
		if(feature.geometry.type==="MultiPolygon"){
			layer.setStyle({fillColor: feature.properties.Color,color:feature.properties.Color,weight:0.5})
		} else {
			layer.on('mouseover', (e) => {
			e.target.setStyle(this.treemapHighlightStyle(feature))
			layer.bindTooltip(popupContent).openTooltip();
			})

			layer.on('mouseout', (e) => {
				e.target.setStyle(this.treemapAgglosStyle(feature))
			})

			layer.on('click', (e) => {
				e.target.setStyle(this.treemapHighlightStyle(feature))
				this.state.map.setView(layer._latlng, 10);
			})

			let popupContent = "<table class='tooltip-table'>";
			popupContent += "<tr><td class='title'></td>" + feature.properties.NAME + "</tr>";
			popupContent += "</table>";
			layer.bindPopup(popupContent).openPopup();
			layer._leaflet_id = feature.properties.City_ID;
		}
	}

	onEachFeature_f = (feature,layer) => {
		let popupContent = "<tr><td class='title'></td>" + "Name: " + feature.properties.Name + "</tr>";
		popupContent += "</br><tr><td class='title'></td>" + "Population: " + feature.properties.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</tr>";
		layer.bindPopup(popupContent).openPopup();
	}

	treemapHighlightStyle = (feature) => {
		return({
			radius: 13,
			fillOpacity: .9,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemapAgglosStyle = (feature) => {
		return({
			radius: 4,
			fillColor: feature.properties.Color,
			fillOpacity: 0.4,
			stroke: true,
			color: feature.properties.Color,
			weight: 1,
		})
	}

	treemap_pointToLayer = (feature, latlng) => {
		if(feature.geometry.type==="MultiPolygon") {
			feature.setstyle({fillColor: feature.properties.Color})
		} else {
			const geojsonMarker = this.treemapAgglosStyle(feature);
			return L.circleMarker(latlng, geojsonMarker);
	}}

	abovefive_pointToLayer = (feature, latlng) =>{
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

	treemap_filter = (feature) => {
		if (feature.properties.treemap_ID === this.props.treemapValue ) {
			return true
		}
	}

	render() { return ( <div id="map"/> ) }
}

export default ResearchMap;
