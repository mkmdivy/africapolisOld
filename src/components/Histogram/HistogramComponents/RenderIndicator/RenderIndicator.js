import React from 'react';
import './RenderIndicator.css';

const renderIndicator = ( props ) => {
    let firstCountryValue = props.data.find(d => d.ID === props.firstValue);
    let secondCountryValue = props.data.find(d => d.ID === props.secondValue);
    if (firstCountryValue.var > secondCountryValue.var) {
        return <div className='Indicator'>&gt;</div>
    }else if (firstCountryValue.var < secondCountryValue.var){
        return <div className='Indicator'>&lt;</div>
    }else if (firstCountryValue.var === secondCountryValue.var) {
        return <div className='Indicator'>&#61;</div>
    }
};

export default renderIndicator;