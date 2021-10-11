import React from 'react';
import Subtract from '../../../assets/images/subtract_.png';
import Add from '../../../assets/images/add_.png';
import MapView from '../../../assets/images/map_.png';
import Content from '../../../assets/images/content_.png';
import './ToggleButton.css'

export const content = (props) => (
    <div className='ToggleButton'> {props.switchContent ? <img src={Content} alt='show menu'/> : <img src={MapView} alt='hide menu'/>} </div>
);


export const mixer = ( props ) => (
    <div className='ToggleButton'> 
        {props.mixerOpen ? <img src={Subtract} alt='show menu'/> : <img src={Add} alt='hide menu'/>} 
    </div>
);
  