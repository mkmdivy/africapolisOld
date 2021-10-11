import React from 'react';
import './Checkbox.css';

const checkBox = ( props ) => ( 
    <div className='RegionalCheck'>
        <input type='checkbox' {...props}/>
        <label>{props.title}</label>
    </div>
);

export default checkBox;