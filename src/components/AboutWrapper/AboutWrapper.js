import React from 'react';
import { LOGOS } from './Logos';
import SocialMedia from '../UI/SocialMedia/SocialMediaItems/SocialMediaItems';
import './AboutWrapper.css';

const AboutWrapper = props => {
    let wrapper = (
        <div className='AboutIntroWrapper'>
            <h5>Africapolis</h5>
            <p>{props.content.intro1}</p>
            <div className='AboutLogoWrapper'>
                <div className='AboutLogo'>
                    <a href='http://www.oecd.org/swac/' target='_blank' rel='noopener noreferrer'>
                        <img src={props.logo} width='100%' alt='OECD'/>
                    </a>
                </div>
                <div className='AboutLogo'>
                    <a href='http://e-geopolis.org/en/home/' target='_blank' rel='noopener noreferrer'>
                        <img src='assets/images/e-geopolis.png' width='70%' alt='e-geopolis'/>
                    </a>
                </div>
            </div>
            <p>{props.content.intro2}</p>
            <div className='AboutLogoWrapper'> 
                <div className='AboutLogo'>
                    <img src="assets/images/SDG-11.png" width="60%" alt='SDG' />
                </div>
            </div>
            <hr/>
            <h5>{props.content.swacTitle}</h5>
            <p>{props.content.swacText}</p>
            <hr/>  
        </div>
    );

    let logo = (
        <div className='MemberWrapper'>
            <h5>{props.content.memberTitle}</h5>
            <p>{props.content.members}</p>
            <br/>
            <div className='MemberLogoWrapper'>
                {LOGOS.map((logo,i) => (
                    <div className='Members' key={i}>
                        <img src={logo.src} width={logo.width} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );

    let footer = (
        <div className="FooterWrapper">
            <div className='Copyright'>
                <div className='CopyrightLogo'>
                    <img src={props.logo} width="100%" alt="OECD"/>
                </div>
                <p>© 2018. SWAC/OECD</p>
            </div>
            <div className='Disclaimer'> 
                <SocialMedia dimen={28} type={'footer'}/>
                <p>{props.content.disclaimer}<br/><span>africapolis@oecd.org</span></p>
                
                <p>Developed by @wonjikyang</p>
            </div>
        </div>
    )

    return ( 
        <div className='AboutWrapper'>
            {wrapper}
            {logo}
            {footer}
        </div>
    );
};

export default AboutWrapper;
