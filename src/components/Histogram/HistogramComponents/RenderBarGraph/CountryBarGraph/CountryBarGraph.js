import React from 'react';
import RenderTooltips from '../../RenderTooltip/CountryTooltip/CountryTooltip';
import RegionTooltips from '../../RenderTooltip/RegionTooltip/RegionTooltip';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import '../RenderBarGraph.css';

const renderBarGraph = ( props ) => {
    let tooltipConfig = {
        yOffset: 55,
        zIndex: 1000
    };
    let bar = (
        <BarChart width={200} height={60} data={props.data}>
            <Bar dataKey='var' onClick={props.sendHistogramValue} id="color"> 
                {props.data.map((entry, index) => (
                    <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  props.selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                ))}
            </Bar>
            <Tooltip content={props.selectedCountry <= 50 ? countryTooltip : regionTooltip} position={{y: tooltipConfig.yOffset }} wrapperStyle={{ zIndex: tooltipConfig.zIndex }}/>
        </BarChart>
    )
    
    return (
        <div className="Graph">{bar}</div>
    );
};

const regionTooltip = ( value ) => {
    if ( value.active && value.payload !== null && value.payload[0] !== null ){
        return <RegionTooltips value={value} total={6} />
    }
}

const countryTooltip = ( value ) => {
    if ( value.active && value.payload !== null && value.payload[0] !== null ){
        return <RenderTooltips value={value} total={50} type={'single'}/>
    }
} 

export default renderBarGraph;