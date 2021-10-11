import React from 'react';
import CountryHistogramItem from './CountryHistogramItem/CountryHistogramItem';
import './CountryHistogramItems.css';

const countryHistogramItems = ( props ) => {
    
    let wrapper = ( 
        <div className='HistogramItems'>
            <CountryHistogramItem {...props} />
        </div> 
    );

    let histogram = null;

    switch(props.case){
        case 0:
            histogram = wrapper;
        break;
        case 1:
            histogram = wrapper;
        break;
        case 2:
            histogram = wrapper;
        break;
        case 3:
            histogram = wrapper;
        break;
        case 4:
            histogram = wrapper;
        break;
        case 5:
            histogram = wrapper;
        break;
        default:
            histogram = null;
        
    }    
    return histogram;
}

export default countryHistogramItems;