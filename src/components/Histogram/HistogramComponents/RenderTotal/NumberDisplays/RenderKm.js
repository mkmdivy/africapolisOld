import React from 'react';
import './NumberDisplay.css';
const renderKm = ( props ) => {

    let metro = ( <p>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}km</p> );
    let perinhab = ( <p>{Math.round(props.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Inhabs &frasl; km&sup2;</p> )

    if( props.value === 0 ) {
        perinhab = <span>Below 100 000</span>
        metro = <span> Metropolitan agglomeration </span>
    }

    let wrapper = null;
    let classes;
    if(props.typeOf === 'compare') {
        classes = 'CompareHistogram_Total';
    }else{
        classes = 'Histogram_Total';
    }
    
    switch(props.type) {
        case 'metro': 
            wrapper = <div className='Agglos_Distance'>{metro}</div>;
        break;
        case 'km':
            wrapper = <div className={classes}> {Math.round(props.value) + 'km'} </div>;
        break;
        case 'perinhab':
            wrapper = <div className='Agglos_Distance'> {perinhab} </div>
        break;
        case 'squaremetre':
            wrapper = <div className="Histogram_Total"><p>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}km&sup2;</p></div>;
        break;
        default:
            wrapper = null;
    }
    return wrapper;
};

export default renderKm;
