import React from 'react';
import AnimateHeight from 'react-animate-height';
import './HistogramWrapper.css';

const histogramWrapper = ( props ) => { 
    let classes = ['CountryInfo'];
    let clickable = null;
    if ( props.selectedAgglos ) {
        clickable = props.clicked
        classes = ['CountryInfo active'];
    }
    if ( props.type === 'country' ) {
        return (
            <div className='HistogramWrapper'>
                <div onClick={clickable} className={classes}> 
                    <h5>{props.histogramLabel.country}</h5>
                    {props.fold ? <i className="material-icons">keyboard_arrow_up</i> :
                    <i className="material-icons active">keyboard_arrow_down</i>} 
                </div>
                <AnimateHeight height={props.fold} className="accordion-content">
                    {props.children}
                </AnimateHeight>
            </div> 
        );
    } else if ( props.type === 'region' ) {
        return (
            <div className='HistogramWrapper'>
                <div className='RegionInfo'> 
                    <h5>{props.histogramLabel.region}</h5>
                </div>
                {props.children}
            </div> 
        );
    } else if ( props.type === 'compare') {
        return (
            <div className='CompareHistogramWrapper'>
                {props.children}
            </div> 
        );
    }
    
};

export default histogramWrapper;