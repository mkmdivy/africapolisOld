import React from 'react';
import Logo from '../../assets/images/africapolis_en.png';
import SmallLogo from '../../assets/images/africapolis_logo_short.png';
import './Logo.css';

const logo = (props) => (
    <React.Fragment>
        <div className='Logo'><img src={Logo} alt="Africapolis" /></div>
        <div className='SmallLogo'><img src={SmallLogo} alt="Africapolis" /></div>
    </React.Fragment>
);

export default logo;