import React from 'react';
// import '../CountryTooltip.css';

const regionTooltip = ( props ) => {
    let payload = props.value.payload[0].payload
    let rank = <span> Rank: {(props.value.label - props.total)*(-1)} </span>
    let country = <p>{payload['country']}</p>
    let type = null;
    switch(payload.case){
        case 0:
        case 1:
            type = (
                <div className="TooltipWrapper">
                    {rank}
                    {country}
                    {payload['var'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </div>
            )
        break;
        case 2:
        case 4:
            type = (
                <div className="TooltipWrapper">
                    {rank}
                    {country}
                    {Math.round(payload['var']*100)+"%"}
                </div>
            )
        break;
        case 3:
            type = (
                <div className="TooltipWrapper">
                    {rank}
                    {country}
                    {Math.round(payload['var'])+"km"}
                </div>
            )
        break;
        default: 
            type = null;
    }
    return type;
}

export default regionTooltip;