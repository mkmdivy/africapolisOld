import React from 'react';
import * as Narrative from './Narrative/Narrative';

const narratives = ( props ) => {
    let words = props.contents[1].text[0].words;
    let page = null;
    switch (`${props.match.url}`) {
        case ('/home/defining_urban'):
            page = <Narrative.stories contents={props.contents[1]} words={words}/>//words={['universal', 'generally accepted definition', 'administrative, numerical and functional criteria']} />
        break;
        case ('/home/urbanisation_dynamics_and_drivers'):
            page = <Narrative.stories contents={props.contents[2]} words={words} />
        break;
        case ('/home/beyond_large_cities'):
            page = <Narrative.stories contents={props.contents[3]} words={words} />
        break;
        case ('/home/about_the_data'):
            page = <Narrative.stories contents={props.contents[4]} words={words} />;
        break;
        default:
            page = <Narrative.landingpage contents={props.contents[0]} words={words} /> ;
    }
    return page;
};

export default narratives;
