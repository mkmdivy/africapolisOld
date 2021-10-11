import React from 'react';
import MixerToggle from '../../UI/MixerToggle/MixerToggle';
import SocialMedia from '../../UI/SocialMedia/SocialMedia';
import './PageLayout.css';

const pageLayOut = ( props ) => {
    let toggle = 'PageLayout';
    if( props.mixerOpen ) {
        toggle = 'PageLayout Open';
    }

    if ( props.switchContent ) {
        toggle = 'PageLayout Hide';
    }

    return(
        <div className={toggle}> 
            <MixerToggle clicked={props.mixerHandler} toggle={props.mixerOpen}/>
            { props.children }
            <SocialMedia /> 
        </div>
    );
    
}

export default pageLayOut;