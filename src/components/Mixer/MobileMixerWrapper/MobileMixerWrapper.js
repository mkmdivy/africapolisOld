import React from 'react'
import './MobileMixerWrapper.css'
import * as Toggle from '../../UI/ToggleButtons/ToggleButtons';

const mobileMixerWrapper = props => {
    let attachedClasses = ['MobileMixerWrapper Closed'];
    if (props.mixerOpen) {
        attachedClasses = ['MobileMixerWrapper Open'];
    }
    
    return (
        <div className={attachedClasses}>
            <div className='MobileMixerWrapper_Content'>
                <div className='MobileMixerWrapper_Switch' onClick={props.handleSwitch}> <Toggle.content switchContent={props.switchContent} /> </div>
                <div className='MobileMixerWrapper_Mixer' onClick={props.handleMobileMixer}> <Toggle.mixer mixerOpen={props.mixerOpen} /> </div>      
            </div>
            {props.children}
        </div> 
    );
};
export default mobileMixerWrapper;