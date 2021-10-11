import React from 'react';
import './CountryTooltip.css';

const renderTooltips = ( props ) => {
    let payload = props.value.payload[0].payload
    let rank = <span> Rank: {(props.value.label - props.total)*(-1)} </span>
    let country = <p>{payload['country']}</p>
    let type = null;
    let classes;
    if (props.type === 'compare'){
        classes = 'TooltipWrapper_Compare';
    }else if(props.type === 'single') {
        classes = 'TooltipWrapper';
    }
    switch(payload.case){
        case 0:
            type = (
                <div className={classes}>
                    {rank}
                    {country}
                    {payload['var'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </div>
            )
        break;
        case 1:
            type = (
                <div className={classes}>
                    {rank}
                    {country}
                    {Math.round(payload['var']*100)+"%"}
                </div>
            )
        break;
        case 2:
            type = (
                <div className={classes}>
                    {rank}
                    {country}
                    {payload['var'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglos
                </div>
            )
        break;
        case 3:
            type = (
                <div className={classes}>
                    {rank}
                    {country}
                    {Math.round(payload['var']*100)+"%"}
                </div>
            )
        break;
        case 4:
            type = (
                <div className={classes}>
                    {rank}
                    {country}
                    {Math.round(payload['var'])+"km"}
                </div>
            )
        break;
        case 5:
            type = (
                <div className={classes}>
                    {rank}
                    {country}
                    {Math.round(payload['var']*10000)/100+"%"}
                </div>
            )
        break;
        default:
            type = null;
    }
    return type;
}

export default renderTooltips;