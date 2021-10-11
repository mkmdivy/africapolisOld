import React from 'react';
import * as Research from '../../../Narratives/Narrative/Narrative';
import Treemaps from '../../../Treemaps/Treemaps';

const researchWrapper = ( props ) => {
    const treemaps = props.contents.find(content => content.url === props.match.params.topicId);

    let page = null;

    switch (`${props.match.url}`) {
        case ('/research/largest_urban_areas_by_builtup_area'):
            page = (
                <Research.research contents={treemaps}>
                    <Treemaps data={treemaps} hovered={props.hovered} clicked={props.clicked}/>
                </Research.research> )
        break;
        case ('/research/densest_urban_areas'):
            page = (
                <Research.research contents={treemaps}>
                    <Treemaps data={treemaps} hovered={props.hovered} clicked={props.clicked}/>
                </Research.research> )
        break;
        case ('/research/least_connected_urban_areas'):
            page = (
                <Research.research contents={treemaps}>
                    <Treemaps data={treemaps} hovered={props.hovered} clicked={props.clicked}/>
                </Research.research> )
        break;
        case ('/research/urban_agglomeration_network'):
            page = <Research.urbanAgglos contents={treemaps} />
        break;
        case ('/research/cross_border_agglomerations_in_africa'):
            page = <Research.crossBorder contents={treemaps} />
        break;
        case ('/research/distance_to_metropoles'):
            page = <Research.distMetro contents={treemaps} />
        break;
        default:
            page = <Research.research contents={props.contents[0]}>
                        <Treemaps data={props.contents[0]} hovered={props.hovered} clicked={props.clicked} />
                    </Research.research>;
    }
    return page;
};


export default researchWrapper;
