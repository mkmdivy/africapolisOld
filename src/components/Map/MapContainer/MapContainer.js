import React from 'react';
import MapWrapper from '../MapWrapper/MapWrapper';
import HomeMap from '../HomeMap';
import ResearchMap from '../ResearchMap';
import CompareMap from '../CompareMap';
import ExploreMap from '../ExploreMap';
import DataDrivenMap from '../DataDrivenMap';

const mapContainer = ( props ) => {
    let map = null;
    switch (`${props.match.url}`) {
        case ('/home'):
        case ('/home/africapolis'):
        case ('/home/defining_urban'):
        case ('/home/urbanisation_dynamics_and_drivers'):
        case ('/home/beyond_large_cities'):
        case ('/home/about_the_data'):
            map =
            <MapWrapper>
                <HomeMap
                    triggerAnim={props.scrollValue}
                    tile={props.tile}
                    path={`${props.match.url}`}
                    lang={props.lang}
                    mixerOpen={props.mixerOpen} />
            </MapWrapper>
        break;
        case ('/explore'):
        case ('/explore/select_country'):
            map =
            <MapWrapper>
                <ExploreMap
                    mixerOpen={props.mixerOpen}
                    africaContinent={props.countryGeoData}
                    regionContinent={props.regionGeoData}
                    agglosGeo={props.agglosGeoData}
                    sizeArray={props.sizeArray}
                    timeSliderValue={props.timeSliderValue}
                    lang={props.lang}
                    selectedCountry={props.selectedCountry}
                    selectedAgglos={props.selectedAgglos}
                    agglosValueToMap={props.agglosValueToMap}
                    sendCountryValueToContent={props.countryValueToMap}/>
            </MapWrapper>
        break;
        case ('/explore/compare_countries'):
            map =
            <MapWrapper>
                <CompareMap
                    searchOption={1}
                    africaContinent={props.countryGeoData}
                    regionContinent={props.regionGeoData}
                    lang={props.lang}
                    compareFirstCountry={props.compareFirstCountry}
                    compareSecondCountry={props.compareSecondCountry}
                    firstCompareValueFromMap={props.firstCompareValueFromMap}
                    secondCompareValueFromMap={props.secondCompareValueFromMap} />
            </MapWrapper>
        break;
        case ('/research'):
        case ('/research/largest_urban_areas_by_population'):
            map =
                <MapWrapper>
                    <ResearchMap
                        triggerAnim={props.scrollValue}
                        treemap_buildup={props.mapData}
                        treemapFilter={'treemap'}
                        lang={props.lang}
                        treemapValue={0}
                        path={`${props.match.url}`}
                        hoveredValue={props.hoveredValue}
                        clickedValue={props.clickedValue} />
                </MapWrapper>
        break;
        case ('/research/largest_urban_areas_by_builtup_area'):
            map =
                <MapWrapper>
                    <ResearchMap
                        triggerAnim={props.scrollValue}
                        lang={props.lang}
                        treemap_buildup={props.mapData}
                        treemapFilter={'treemap'}
                        treemapValue={1}
                        path={`${props.match.url}`}
                        hoveredValue={props.hoveredValue}
                        clickedValue={props.clickedValue} />
                </MapWrapper>
        break;
        case ('/research/densest_urban_areas'):
            map =
                <MapWrapper>
                    <ResearchMap
                        triggerAnim={props.scrollValue}
                        treemap_buildup={props.mapData}
                        treemapFilter={'treemap'}
                        treemapValue={2}
                        path={`${props.match.url}`}
                        lang={props.lang}
                        hoveredValue={props.hoveredValue}
                        clickedValue={props.clickedValue} />
                </MapWrapper>
        break;
        case ('/research/least_connected_urban_areas'):
            map =
                <MapWrapper>
                    <ResearchMap
                        triggerAnim={props.scrollValue}
                        treemap_buildup={props.mapData}
                        lang={props.lang}
                        treemapFilter={'treemap'}
                        treemapValue={3}
                        path={`${props.match.url}`}
                        hoveredValue={props.hoveredValue}
                        clickedValue={props.clickedValue} />
                </MapWrapper>
        break;
        case ('/research/urban_agglomeration_network'):
            map =
                <MapWrapper>
                    <DataDrivenMap
                        triggerAnim={props.scrollValue}
                        path={`${props.match.url}`}
                        treemapValue={4}
                        lang={props.lang}
                        mixerOpen={props.mixerOpen} />
                </MapWrapper>
        break;
        case ('/research/cross_border_agglomerations_in_africa'):
        map =
            <MapWrapper>
                <DataDrivenMap
                    triggerAnim={props.scrollValue}
                    path={`${props.match.url}`}
                    lang={props.lang}
                    treemapValue={5}
                    mixerOpen={props.mixerOpen} />
            </MapWrapper>
        break;
        case ('/research/distance_to_metropoles'):
        map =
            <MapWrapper>
                <DataDrivenMap
                    triggerAnim={props.scrollValue}
                    path={`${props.match.url}`}
                    lang={props.lang}
                    treemapValue={6}
                    mixerOpen={props.mixerOpen} />
            </MapWrapper>
        break;
        default:
            map = null;
    }
    return map;
};

export default mapContainer;
