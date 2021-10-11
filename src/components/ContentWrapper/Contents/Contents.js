import React from 'react';
import Mixer from '../../Mixer/Mixer';
import MapContainer from '../../Map/MapContainer/MapContainer';
import PageLayout from '../../Layout/PageLayout/PageLayout';
import HomeContentContainer from '../ContentContainer/HomeContentContainer';
import ExploreContentContainer from '../ContentContainer/ExploreContentContainer';
import MobileMixer from '../../Mixer/MobileMixer/MobileMixer';
import AboutUs from '../../AboutWrapper/AboutWrapper';
import DataWrapper from '../../DataWrapper/DataWrapper';

export const home = ( props ) => {
    return (
        <React.Fragment>
            <MobileMixer path={props.path} contents={props.contents} changed={props.changed} mixerOpen={props.mixerOpen} handleMobileMixer={props.handleMobileMixer} switchContent={props.switchContent} handleSwitch={props.handleSwitch} />
            <MapContainer
                match={props.match}
                scrollValue={props.scrollValue}
                mixerOpen={props.mixerOpen}
                mapData={props.mapData}
                hoveredValue={props.hoveredValue}
                clickedValue={props.clickedValue}
                lang={props.lang}
                switchContent={props.switchContent} />
            <PageLayout mixerHandler={props.mixerHandler} switchContent={props.switchContent} mixerOpen={props.mixerOpen}>
                <Mixer path={props.path} contents={props.contents} changed={props.changed} />
                <HomeContentContainer
                    match={props.match}
                    path={props.path}
                    contents={props.contents}
                    text={props.text}
                    pageOffset={props.pageOffset}
                    hovered={props.hovered}
                    clicked={props.clicked} />
            </PageLayout>
        </React.Fragment>
    );
}

export const explore =( props ) => {
    return (
        <React.Fragment>
            <MobileMixer {...props} />
            <MapContainer {...props} />
            <PageLayout {...props}>
                <Mixer path={props.path} contents={props.contents} changed={props.changed} />
                <ExploreContentContainer {...props} />
            </PageLayout>
        </React.Fragment>
    );
}

export const aboutus = ( props ) => {
    return (
        <AboutUs {...props} />
    );
};

export const data = ( props ) => {
    return (
        <DataWrapper {...props} />
    )
}
