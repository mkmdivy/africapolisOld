import React from 'react';
import Narratives from '../../Narratives/Narratives';
import ExploreWrapper from './ExploreWrapper/ExploreWrapper';
import ResearchWrapper from './ResearchWrapper/ResearchWrapper';

const content = ( props ) => {
    let page = null;
    switch (props.path) {
        case ('/home'):
            page = <Narratives {...props} />
        break;
        case ('/explore'):
            page = <ExploreWrapper {...props} />
        break;
        case ('/research'):
            page = <ResearchWrapper {...props} />
        break;
        default: 
            page = null;
    }
    return page;
}

export default content;