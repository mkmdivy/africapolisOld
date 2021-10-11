import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Language from '../Language/Language';
import './Header.css';

const header = ( props ) => {

   
        return(
            <header className="Header">
                <DrawerToggle clicked={props.drawerToggleClick} />
                <div className="LogoWrapper">
                    <Logo />
                </div>
                <div className="NavWrapper">
                    <Language languageHandler={props.languageHandler} lang={props.lang} />
                    <nav><NavigationItems lang={props.lang} /></nav>
                </div>
            </header> 
        );
};

export default header;

