import React from 'react';
import './NumberDisplay.css';

const renderNumber = ( props ) => {
    let classes;
    if(props.typeOf === 'compare') {
        classes = 'CompareHistogram_Total';
    }else{
        classes = 'Histogram_Total'
    }
    return (
        <div className={classes}> {props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} </div> 
    )
}

export default renderNumber;