import React from 'react';
import { NavLink } from 'react-router-dom';
import './MixerItem.css';

// const addEvent = ( location, match ) => {
//     if ( (match.pathname === '/home') || (match.pathname === '/home/africapolis') ){
//         return true
//     }
// }

const mixerItem = ( props ) => (
    <div className='MixerItem'>
        <NavLink exact to={props.path} onClick={props.changed} className={props.active ? 'active' : null}> {props.children} </NavLink>
    </div>
);

export default mixerItem;