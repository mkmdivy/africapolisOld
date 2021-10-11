import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Language from '../Language/Language';
import NavigationItems from '../NavigationItems/NavigationItems';
import SocialMediaItems from '../../UI/SocialMedia/SocialMediaItems/SocialMediaItems';
import OecdLogo from '../../UI/OECDLogo/OECDLogo';
import './SideDrawer.css';

const sideDrawer = props => {
    let attachedClasses = ['SideDrawer Close'];
    let dimen=28;
    if (props.open) {
        attachedClasses = ['SideDrawer Open']
    }
    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses}>
                <div>
                    <Language languageHandler={props.languageHandler} lang={props.lang}/>
                    <nav><NavigationItems lang={props.lang}/></nav>
                </div>
                <div className='SideDrawer_logo'>
                    <SocialMediaItems dimen={dimen} type={'nav'}/>
                    <OecdLogo lang={props.lang}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;