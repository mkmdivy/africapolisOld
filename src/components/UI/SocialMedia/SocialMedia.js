import React from 'react';
import SocialMediaItems from './SocialMediaItems/SocialMediaItems';
import './SocialMedia.css';

const RenderSocialMedia = () => {
    let dimen = 28;
    return(
        <div className="SocialMedia_Wrapper">
            <SocialMediaItems dimen={dimen} type={'nav'}/>
        </div>
    );
}

export default RenderSocialMedia;