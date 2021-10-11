import React from 'react';
import Timeline from '../../../HistogramComponents/RenderBarGraph/AgglosGraph/AgglosTimeLine';
import Info from '../../../../UI/VarInfo/VarInfo';

const agglosTimeLineItem = ( props ) => {
    let title = ( <div className="AgglosLineGraph_Title"> {props.title.var} <Info info={props.title.des} /> </div> );
    let timeline = <Timeline {...props} />;
    return (
        <React.Fragment>
            {title}
            {timeline}
        </React.Fragment>
    )
}

export default agglosTimeLineItem;