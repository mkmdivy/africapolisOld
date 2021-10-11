import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = ( props ) => {

    let menu = {
        home: 'Home',
        explore: 'Explore',
        research: 'Research',
        data: 'Data',
        aboutus: 'About Us'
    }

    if ( props.lang === 1 ) {
        menu = {
            home: 'Accueil',
            explore: 'Explorer',
            research: 'Analyses',
            data: 'Data',
            aboutus: 'À propos'
        }
    }

    return (
        <ul className="NavigationItems">
            <NavigationItem link='/home'> {menu.home} </NavigationItem>
            <NavigationItem link='/explore'> {menu.explore} </NavigationItem>
            <NavigationItem link='/research'> {menu.research} </NavigationItem>
            <NavigationItem link='/data'> {menu.data} </NavigationItem>
            <NavigationItem link='/aboutus'> {menu.aboutus} </NavigationItem>
        </ul>
    );
};


export default navigationItems;