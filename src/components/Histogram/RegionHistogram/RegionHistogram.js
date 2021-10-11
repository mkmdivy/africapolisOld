import React from 'react';
import RegionHistogramItems from './RegionHistogramItems/RegionHistogramItems';
import './RegionHistogram.css';

const regionHistogram = ( props ) => {
    let wrapper = props.data.map((d,i) => (
        <RegionHistogramItems 
            key={i}
            case={d.ID} 
            label={d.title}
            data={d.variable}
            selectedCountry={props.selectedCountry}
            histogramLabel={props.histogramLabel} />
    ))

    return ( <div className='RegionHistogram'> {wrapper} </div> );
};

export default regionHistogram;