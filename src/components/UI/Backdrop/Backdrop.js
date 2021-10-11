import React from 'react';
import './Backdrop.css'

const backdrop = props => (
    props.show ? <div onClick={props.clicked} className="Backdrop"></div> : null
    // <div className="Backdrop"></div>
);

export default backdrop;