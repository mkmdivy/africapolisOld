import React from 'react';
import * as SearchBar from './ExploreSearchBar/ExploreSearchBar';
import SingleSearchWrapper from '../../../ExploreContentWrappers/SingleSearchWrapper/SingleSearchWrapper';
import CountryCompareWrapper from '../../../ExploreContentWrappers/CountryCompareWrapper/CountryCompareWrapper';

const exploreWrapper = ( props ) => {
    let page = null;
    switch (`${props.match.url}`) {
        case ('/explore/select_country'):
        case ('/explore'):
            page =  <SearchBar.single 
                        contents={props.contents} 
                        countryList={props.countryList}
                        agglosList={props.agglosList}
                        label={props.label}
                        countryValue={props.countryValue}
                        selectedCountry={props.selectedCountry}
                        regionHandler={props.regionHandler}
                        regionSelected={props.regionSelected}
                        selectedAgglos={props.selectedAgglos}
                        agglosValue={props.agglosValue}
                        sendCountryValue={props.sendCountryValue}
                        sendAgglosValue={props.sendAgglosValue} > 
                        <SingleSearchWrapper 
                            selectedCountry={props.selectedCountry}
                            selectedAgglos={props.selectedAgglos}
                            timeSliderValue={props.timeSliderValue}
                            lang={props.lang}
                            handleSliderValue={props.handleSliderValue}
                            agglosArray={props.agglosArray}
                            countryData={props.countryData}
                            agglosData={props.agglosData}
                            sendHistogramValue={props.sendHistogramValue} />
                    </SearchBar.single> 
        break;
        case ('/explore/compare_countries'):
            page = <SearchBar.compare
                        contents={props.contents}
                        countryList={props.countryList}
                        label={props.label}
                        firstCompareValue={props.compareFirstCountry}
                        secondCompareValue={props.compareSecondCountry}
                        firstDisplayValue={props.firstDisplayValue}
                        secondDisplayValue={props.secondDisplayValue}
                        sendFirstValue={props.firstCompareValueFromMap}
                        sendSecondValue={props.secondCompareValueFromMap}>
                        <CountryCompareWrapper
                            lang={props.lang}
                            countryData={props.countryData}
                            compareFirstCountry={props.compareFirstCountry}
                            compareSecondCountry={props.compareSecondCountry} />
                    </SearchBar.compare>
        break;
        default: 
            page = null;
    }
    return page;
};

export default exploreWrapper;