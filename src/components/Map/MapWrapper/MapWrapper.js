import React from 'react';
import './MapWrapper.css';

const MapWrapper = ( props ) => {

    return (
        <div className='Map'>
            {props.children}
        </div>
    );
};

export default MapWrapper;