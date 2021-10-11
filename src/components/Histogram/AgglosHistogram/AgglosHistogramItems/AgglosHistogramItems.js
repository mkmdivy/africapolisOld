import React from 'react';
import AgglosHistogramItem from './AgglosHistogramItem/AgglosHistogramItem';
import AgglosTimeLineItem from './AgglosHistogramItem/AgglosTimeLineItem';

const agglosHistogramItems = ( props ) => {
    
    let wrapper = ( 
        <div className='HistogramItems'>
            <AgglosHistogramItem {...props} />
        </div> 
    );

    let timeline = (
        <div className='HistogramItems'>
            <AgglosTimeLineItem {...props} />
        </div> 
    )

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
            histogram = timeline;
        break;
        default:
            histogram = null;
    }    
    return histogram;
}

export default agglosHistogramItems;