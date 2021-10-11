import React from 'react';
import MixerItems from '../MixerItems/MixerItems';
import MobileMixerWrapper from '../MobileMixerWrapper/MobileMixerWrapper';
import './MobileMixer.css';

const mobileMixer = ( props ) => (
    <MobileMixerWrapper mixerOpen={props.mixerOpen} handleMobileMixer={props.handleMobileMixer} switchContent={props.switchContent} handleSwitch={props.handleSwitch}>
        <MixerItems path={props.path} contents={props.contents} changed={props.changed} />
    </MobileMixerWrapper>   
);
        
export default mobileMixer;