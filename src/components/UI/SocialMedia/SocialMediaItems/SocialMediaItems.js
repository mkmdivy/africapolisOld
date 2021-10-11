import React from 'react';
import {  FacebookIcon,  TwitterIcon,  LinkedinIcon, EmailIcon} from 'react-share';
import './SocialMediaItems.css';

const socialMediaItems = ( props ) => {
    let classes;
    if( props.type === 'nav') {
        classes = 'SocialMediaItems';
    }else if(props.type === 'footer'){
        classes = 'Footer_SocialMediaItems';
    }

    return (
        <div className={classes}>
            <a href="http://eepurl.com/giAuMD" target="_blank" rel="noopener noreferrer"><EmailIcon size={props.dimen} round={true} /></a>
            <a href="https://twitter.com/SWAC_OECD" target="_blank" rel="noopener noreferrer"><TwitterIcon size={props.dimen} round={true}/></a>
            <a href="http://www.facebook.com/OECDSWAC" target="_blank" rel="noopener noreferrer"><FacebookIcon size={props.dimen} round={true}/></a>
            <a href="https://www.linkedin.com/company/sahel-and-west-africa-club-club-du-sahel-et-l-afrique-de-l-ouest/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={props.dimen} round={true} /></a>
        </div>
    )
};

export default socialMediaItems;