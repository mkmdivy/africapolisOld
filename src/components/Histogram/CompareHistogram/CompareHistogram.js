import React from 'react';
import CompareHistogramItems from './CompareHistogramItems/CompareHistogramItems';
import './CompareHistogram.css';

const countryName = ( data, value ) => {
    let result = data.find( d => d.ID === value);
    return result.country;
}

const compareHistogram = ( props ) => {
    let firstCountry = countryName(props.data[0].variable, props.firstValue);
    let secondCountry = countryName(props.data[0].variable, props.secondValue);
    let wrapper = props.data.map((d, i) => (
        <CompareHistogramItems 
            key={i} 
            case={d.ID}
            title={d.title} 
            label={props.label}
            firstValue={props.firstValue}
            secondValue={props.secondValue}
            data={d.variable} />
    ));
    let countryLabel = (
        <div className='CompareHistogramLabel'>
            <p>{firstCountry}</p>
            <p>{secondCountry}</p>
        </div>
    )
    return (
        <div className='CompareHistogram'>
            {countryLabel}
            {wrapper}
        </div>
    )
};

export default compareHistogram;