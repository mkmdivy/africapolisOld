import React from 'react';
import * as Total from '../../../HistogramComponents/RenderTotal/RenderTotal';
import * as Ranking from '../../../HistogramComponents/RenderRanking/RenderRanking';
import BarGraph from '../../../HistogramComponents/RenderBarGraph/AgglosGraph/AgglosBarGraph';
import Info from '../../../../UI/VarInfo/VarInfo';

const countryHistogramItem = ( props ) => {
    let title = ( <div className="AgglosHistogramItem_Title"> {props.title.var} <Info info={props.title.des} /> </div> );
    let totalNumber = <Total.agglos {...props} />;
    let ranking = <Ranking.agglos {...props} />;
    const barGraph = <BarGraph {...props} />;

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