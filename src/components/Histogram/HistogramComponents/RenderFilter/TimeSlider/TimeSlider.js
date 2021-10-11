import React from 'react';
import StepRangeSlider from 'react-step-range-slider'
import './TimeSlider.css';

let timeSliderRange = [
    { value: 1950, step: 10 },
    { value: 1960, step: 10 },
    { value: 1970, step: 10 },
    { value: 1980, step: 10 },
    { value: 1990, step: 10 },
    { value: 2000, step: 10 },
    { value: 2010, step: 5 },
    { value: 2015 }
]

const timeSlider = ( props ) => (
    
    <div className='TimeSlider'>
        <h6>Timeslider</h6>
        <span> {props.timeSliderValue} </span>
        <StepRangeSlider
            value={2015}
            range={timeSliderRange}
            onChange={props.handleSliderValue} />
    </div>
);

export default timeSlider;

