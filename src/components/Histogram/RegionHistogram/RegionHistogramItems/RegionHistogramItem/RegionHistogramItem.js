import React from 'react';
import * as Total from '../../../HistogramComponents/RenderTotal/RenderTotal';
import * as Ranking from '../../../HistogramComponents/RenderRanking/RenderRanking';
import Info from '../../../../UI/VarInfo/VarInfo';
import BarGraph from '../../../HistogramComponents/RenderBarGraph/CountryBarGraph/CountryBarGraph';

const regionHistogramItem = ( props ) => {
    let title = ( <div className='RegionHistogramItem_Title'> {props.label.var}<Info info={props.label.des} /></div> );
    let totalNumber = <Total.region {...props} />;
    let ranking = <Ranking.region {...props} />;
    let barGraph = <BarGraph {...props} />;

    return (
        <React.Fragment>
            {title}
            {totalNumber}
            {ranking}
            {barGraph}
        </React.Fragment>
    );
};

export default regionHistogramItem;
