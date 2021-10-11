import React from 'react';
import './NumberDisplay.css';

const percentage = ( props ) => {
    let classes;
    if(props.typeOf === 'compare') {
        classes = 'CompareHistogram_Total';
    }else{
        classes = 'Histogram_Total'
    }

    return (
        <div className={classes}> {Math.round(props.value * 10000)/100}% </div>
    );
};

export default percentage;
