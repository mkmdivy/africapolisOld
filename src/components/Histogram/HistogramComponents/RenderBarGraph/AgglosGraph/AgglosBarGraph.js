import React from 'react';
import RenderTooltips from '../../RenderTooltip/AgglosTooltip/AgglosTooltip';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import '../RenderBarGraph.css';

const renderBarGraph = ( props ) => {

    let tooltipConfig = {
        yOffset: 55,
        zIndex: 1000
    };
    let bar = (
        <BarChart width={200} height={60} data={props.data}>
            <Bar dataKey='var' id="color"> 
                {props.data.map((entry, index) => (
                    <Cell cursor="pointer" key={`cell-${index}`} fill={props.data[index].ID ===  props.selectedAgglos ? '#c5543f' : '#e0e0e0' }/>
                ))}
            </Bar>
            <Tooltip content={customTooltip} position={{y: tooltipConfig.yOffset }} wrapperStyle={{ zIndex: tooltipConfig.zIndex }}/>
        </BarChart>
    )
    return (
        <div className="Graph">{bar}</div>
    );
};

const customTooltip = ( value ) => {
    if ( value.active && value.payload !== null && value.payload[0] !== null ){
        return <RenderTooltips value={value} />
    }
} 

export default renderBarGraph;