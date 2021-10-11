import React, { Component } from 'react';
import { Treemap } from 'd3plus-react';

class Treemaps extends Component {
    render() {
        
		const data = this.props.data;
		const build = {
			groupBy: ["ID","NAME"],
			data: data.data,
			size: d => d.value,
			on: {
				click: d => this.props.clicked(d.City_ID), 
				mouseover: d => this.props.hovered(d.City_ID)
			},
			tooltip: true,
			tooltipConfig: { 
				body: d=> "<table style=z-index:10000>" + 
				Math.round(d.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + 
				data.measure+"</table>"
			},
			legend: false,
			fill: d => d.Color,
			shapeConfig: {fill:d => d.Color,
			labelConfig: {
				fontResize:false,
				fontSize:13,
				width:50,
				height:1000,
				padding:0.2
        }}};
        
		return <Treemap config={build} /> ;
	}
}

export default Treemaps;
