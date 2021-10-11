import React from 'react';
import RenderTooltips from '../../RenderTooltip/AgglosTooltip/AgglosTooltip';
import { LineChart, CartesianGrid, Line, Tooltip } from 'recharts';
import '../RenderBarGraph.css';

const agglosTimeLine = ( props ) => {

    let tooltipConfig = {
        yOffset: 55,
        zIndex: 1000
    };
    let timeline = (
        <LineChart width={230} height={80} data={props.data[0]}>
            <Line type="monotone" dataKey="pop" stroke="#c5543f" fill="#c5543f"/>
            <CartesianGrid strokeDasharray="1 1"/>
            <Tooltip content={customTooltip} position={{y: tooltipConfig.yOffset }} wrapperStyle={{ zIndex: tooltipConfig.zIndex }}/>
        </LineChart>
    )
    return (
        <div className="Graph">{timeline}</div>
    );
};

const customTooltip = ( value ) => {
    if ( value.active && value.payload !== null && value.payload[0] !== null ){
        return <RenderTooltips value={value} />
    }
}

export default agglosTimeLine;


