import React from 'react';
import * as Total from '../../../HistogramComponents/RenderTotal/RenderTotal';
import * as Ranking from '../../../HistogramComponents/RenderRanking/RenderRanking';
import Info from '../../../../UI/VarInfo/VarInfo';
import BarGraph from '../../../HistogramComponents/RenderBarGraph/CountryBarGraph/CountryBarGraph';
import './CountryHistogramItem.css';

const countryHistogramItem = ( props ) => {
    let title = ( <div className="CountryHistogramItem_Title"> {props.label.var} <Info info={props.label.des} /> </div> );
    let totalNumber = <Total.country {...props} />;
    let ranking = <Ranking.country {...props} />;
    const barGraph = <BarGraph {...props} sendHistogramValue={props.sendHistogramValue} />;
    return (
        <React.Fragment>
            {title}
            {totalNumber}
            {ranking}
            {barGraph}
        </React.Fragment>
    )
}

export default countryHistogramItem;