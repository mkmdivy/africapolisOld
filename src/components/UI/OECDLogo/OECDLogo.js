import React from 'react';
import English from '../../../assets/images/oecd_en.png';
import French from '../../../assets/images/oecd_fr.png';
import './OECDLogo.css';

const oecdLogo = (props) => {
 
    if ( props.lang === 0) {
        return (
            <div className='oecdLogo'><img src={English} alt="OECD/SWAC" /></div>
        )
    }else {
        return (
            <div className='oecdLogo'><img src={French} alt="OCDE/SWAC" /></div>
        )
    }
}

export default oecdLogo;