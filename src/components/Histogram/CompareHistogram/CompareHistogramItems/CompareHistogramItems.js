import React from 'react';
import CompareHistogramItem from './CompareHistogramItem/CompareHistogramItem';

const comapreHistogramItems = ( props ) => {
    
    let wrapper = ( 
        <div className='HistogramItems Compare'>
            <CompareHistogramItem {...props} />
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

export default comapreHistogramItems;