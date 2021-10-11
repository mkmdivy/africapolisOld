import React from 'react';
import AgglosHistogramItems from './AgglosHistogramItems/AgglosHistogramItems';
import './AgglosHistogram.css';

const cityHistogram = ( props ) => {
    let wrapper = props.data.map((d,i) => (
        <AgglosHistogramItems 
            key={i} 
            case={d.ID} 
            title={d.title} 
            data={d.variable} 
            selectedAgglos={props.selectedAgglos}
            histogramLabel={props.histogramLabel} />
    ))

    if (props.selectedAgglos) {
        return ( 
            <div className='AgglosHistogram'>
                <hr/> 
                <h5> {props.histogramLabel.agglos} </h5>
                {wrapper} 
            </div> 
        );
    } else { return <div></div> }
};

export default cityHistogram;

