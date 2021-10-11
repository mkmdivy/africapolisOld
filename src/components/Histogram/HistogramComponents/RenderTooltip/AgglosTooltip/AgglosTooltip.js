import React from 'react';

const agglosTooltip = ( props ) => {

    let payload = props.value.payload[0].payload;
    let agglos = <span>{payload['city']}</span>  
    let type = null;
    switch(payload.case){
        case 0:
            type = (
                <div className="custom-tooltip-agglos">
                    {agglos}<br/>
                    {payload['var'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </div>
            )
        break;
        case 1:
            type = (
                <div className="custom-tooltip-agglos">
                    {agglos}<br/>
                    {Math.round(payload['var']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} inhabitants &frasl; km&sup2;
                </div>
            )
        break;
        case 2:
            type = (
                <div className="custom-tooltip-agglos">
                    {agglos}
                    <p>Closest Metro: <span>{payload['metro']}</span></p>
                    {payload['var'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
                </div>
            )
        break;
        case 3:
            type = (
                <div className="custom-tooltip-agglos">
                    {agglos}<br/>
                    {Math.round(payload['var']*100)/100} km&sup2;
                </div>
            )
        break;
        case 4:
            type = (
                <div className="custom-tooltip-agglos">
                    {agglos}<br/>
                    {Math.round(payload['var']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km&sup2;
                </div>
            )
        break;
        case 5:
            type = (
                <div className="custom-tooltip-agglos">
                    Year {Math.round(payload['year'])}
                    <p>{payload['pop'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
                </div>
            )
        break;
        default: 
            type = null; 
    }
    return type;
}

export default agglosTooltip;