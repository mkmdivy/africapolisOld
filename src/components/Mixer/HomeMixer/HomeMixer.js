import React from 'react';
import MixerItem from '../MixerItems/MixerItem/MixerItem';
import '../Mixer.css';

const homeMixer = ( props ) => {
    let mixerItem = props.contents;
    let title = ( <h5> What is Africapolis</h5> );
    let whatsnew = ( <h5> What's new ?</h5> );
    let menu = mixerItem.map((item, key) => 
        <MixerItem path={`${props.path}/${item.url}`} changed={props.changed} key={key}> {item.title} </MixerItem>
    );

    let newItems = [
        {
            ID: 0,
            url: '/research/urban_agglomeration_network',
            title: 'Urban agglomeration network'
        },
        {
            ID: 1,
            url: '/research/cross_border_agglomerations_in_africa',
            title: 'Cross-border agglomerations in Africa'
        }
    ]

    let newItem = newItems.map((item, key) => 
        <MixerItem path={item.url} changed={props.changed} key={key}> {item.title} </MixerItem>
    )

    return (
        <div className="Mixer">
            {title}
            {menu}
            {whatsnew}
            {newItem}
        </div>
    );
};

export default homeMixer; 