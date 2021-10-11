import React from 'react';
import 'material-icons-react';
import './MixerToggle.css';

const webOnly = props => (
    <div className="MixerToggle">
        <button className="ToggleButton" onClick={props.clicked}> 
            <i className="material-icons">{props.toggle === true ? 'cancel' : 'add_circle'}</i>
        </button>
    </div>     
);

export default webOnly;