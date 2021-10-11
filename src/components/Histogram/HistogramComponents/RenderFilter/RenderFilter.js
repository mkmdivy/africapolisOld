import React from 'react';
import TimeSlider from './TimeSlider/TimeSlider';
import Legends from './Legends/Legends';
import './RenderFilter.css';

const renderFilter = ( props ) => {
    return (
        <div className='RenderFilter'>
            <TimeSlider timeSliderValue={props.timeSliderValue} handleSliderValue={props.handleSliderValue}/>
            <hr align='center' width='100%'/>
            <Legends {...props} />
        </div>
    )
};

export default renderFilter;