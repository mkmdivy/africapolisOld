import React from 'react';
import CountryHistogramItems from './CountryHistogramItems/CountryHistogramItems';
import './CountryHistogram.css';

const histogram = ( props ) => {
    let wrapper = props.data.map((d,i) => (
        <CountryHistogramItems 
            key={i} 
            case={d.ID} 
            label={d.title} 
            data={d.variable}
            selectedCountry={props.selectedCountry}
            histogramLabel={props.histogramLabel}
            sendHistogramValue={props.sendHistogramValue} />
    ))
    return (
        <div className='CountryHistogram'> {wrapper} </div>
    );
};

export default histogram;