import React from 'react';
import RenderTooltips from '../../RenderTooltip/CountryTooltip/CountryTooltip';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import '../RenderBarGraph.css';

const renderBarGraph = ( props ) => {
    let tooltipConfig = {
        yOffset: 55,
        zIndex: 1000
    };

    let selectedValues = [
        {
            value: props.firstValue,
            color: '#c7533a'
        },
        {
            value: props.secondValue,
            color: '#e8ae40'
        }
    ];

    let bar = (
        <BarChart width={200} height={60} data={props.data}>
            <Bar dataKey='var' onClick={props.sendHistogramValue} id="color">
            {props.data.map((entry, index) => (
                <Cell cursor="pointer" key={`cell-${index}`} fill={
                    entry.ID === selectedValues[0].value ?  selectedValues[0].color :
                    entry.ID === selectedValues[1].value ?  selectedValues[1].color : '#efefef'}/>
            ))} 
            </Bar>
            <Tooltip content={countryTooltip} position={{y: tooltipConfig.yOffset }} wrapperStyle={{ zIndex: tooltipConfig.zIndex }}/>
        </BarChart>
    )
    
    return (
        <div className="CompareBarGraph">{bar}</div>
    );
};

const countryTooltip = ( value ) => {
    if ( value.active && value.payload !== null && value.payload[0] !== null ){
        return <RenderTooltips value={value} total={50} type={'compare'}/>
    }
} 

export default renderBarGraph;