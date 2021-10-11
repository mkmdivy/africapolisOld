import React, { Component } from 'react';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { Route, Switch } from 'react-router-dom';
import { COUNTRYINFO } from '../../shared/info_country';
import { AGGLOMERATIONINFO } from '../../shared/info_agglomeration';
import { AFRICA_CONTINENT } from '../../shared/geo_country';
import { AFRICA_REGION } from '../../shared/geo_region';
import { AGGLOS } from '../../shared/geo_agglomeration';

class ExploreContainer extends Component {
    state = {
        countryInfo: COUNTRYINFO,
        aggloInfo: AGGLOMERATIONINFO,
        region_GeoData: AFRICA_REGION,
        country_GeoData: AFRICA_CONTINENT,
        agglos_GeoData: AGGLOS,
        sizeArray: '',
        selectedCountry: '',
        selectedAgglos: '',
        compareFirstCountry: null,
        compareSecondCountry: null,
        regionSelected: false,
        exploreLabels: [
            {
                ID: 0,
                country: 'Select country',
                agglos: 'Select agglomeration'
            },
            {
                ID: 1,
                country: 'Sélectionner un pays',
                agglos: 'Sélectionner une agglomération',
            }
        ],
        timeSliderValue: 2015,

    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                selectedCountry: '',
                selectedAgglos: '',
                compareFirstCountry: null,
                compareSecondCountry: null,
            })
        }

        if(this.state.regionSelected !== prevState.regionSelected) {
            this.setState({
                selectedCountry: '',
                selectedAgglos: '',
                compareFirstCountry: null,
                compareSecondCountry: null,
            })
        }
    }

    handleSliderValue = ( value ) => {
        this.setState({
            timeSliderValue: value
        })
    }

    handleAgglosValueFromMap = ( value ) => {
        this.setState({ selectedAgglos: value.value })
    }

    handleSizeArray = ( value ) => {
        this.setState({ sizeArray: value })
    }

    handleHistogramValue = ( value ) => {
        if(value !== '' && value !== null){
            if(value.ID !== this.state.selectedCountry){
                this.setState({selectedAgglos: ''})
            }
        };
        let newValue = value === null ? '' : value.ID;
        this.setState({ selectedCountry: newValue });
    }

    handleCountryValue = ( value ) => {
        if(value !== '' && value !== null){
            if(value.value !== this.state.selectedCountry){
                this.setState({selectedAgglos: ''})
            }
        };
        let newValue = value === null ? '' : value.value;
        this.setState({ selectedCountry: newValue });
    }

    handleAgglosValueFromSearch = ( value ) => {
        let correspondingCountry = value === null ? this.state.selectedCountry : value.countryID;
        let newValue = value === null ? '' : value.value
        this.setState({ selectedAgglos: newValue, selectedCountry: correspondingCountry})
    }

    countryValueHandler = ( value, data ) => {
        let list = data.map(d => d.options).reduce((acc, val) => acc.concat(val), []).find(u => u.value === value);
        if(value && value !== '' ){ return( ({value: list.value, label: list.label}) )
        } else if (value === ''){ return null; }
    }

    agglosValueHandler = ( agglosValue, countryValue, data  ) => {
        let list = data.find(u => u.City_ID === agglosValue);
        if( (agglosValue && countryValue) && countryValue <= 50 ){
            return( ({ value: list.City_ID, label: list.cityName}) )
        }else if ( (countryValue === '' || agglosValue === '') || countryValue > 50 ) {
            return null;
        }
    }

    agglosListHandler = ( value, data ) => {
        let list = data.sort((a, b) => a.cityName.localeCompare(b.cityName))
        if( value ){
            let agglosList = list.filter(u => (u.ID === value))
                .map((a,i) => ({value: a.City_ID, label: a.cityName, countryID: a.ID}))
            return ( agglosList )
        } else {
            return (
                list.map((a,i) => ( { value: a.City_ID, label: a.cityName, countryID: a.ID } )) )
        }
    }

    handleFirstValueFromMap = ( value ) => {
        this.setState({ compareFirstCountry: value.value })
    }

    handleSecondValueFromMap = ( value ) => {
        this.setState({ compareSecondCountry: value.value })
    }

    regionHandler = ( ) => {
        this.setState((prevState) => {
            return { regionSelected: !prevState.regionSelected}
        })
    }

    render () {
        let mixer = [
                {
                    ID: 0,
                    title_en: 'Country/region',
                    title_fr: 'Pays/région',
                    url: 'select_country',
                    mixerTitle_en: 'Explore',
                    mixerTitle_fr: 'Explorer',

                },
                {
                    ID: 1,
                    title_en: 'Compare countries',
                    title_fr: 'Comparer les pays',
                    url: 'compare_countries',
                }
            ];
        let exploreLabels = [
            {
                ID: 0,
                country: 'Select country or region',
                agglos: 'Select agglomeration',
                countryTitle: 'Country/Region',
                agglosTitle: 'Agglomeration',
                compareFirst: 'Select first country',
                compareSecond: 'Select second country',
                firstCountry: 'First country',
                secondCountry: 'Second country'
            },
            {
                ID: 1,
                country: 'Sélectionner un pays',
                agglos: 'Sélectionner une agglomération',
                compareFirst: 'Sélectionner le premier pays',
                compareSecond: 'Sélectionner le deuxième pays',
                countryTitle: 'Pays/Région',
                agglosTitle: 'Agglomeration',
                firstCountry: 'le premier pays',
                secondCountry: 'le deuxième pays'
            }
        ];

        let exploreMixer = [...mixer];
        let contents = exploreMixer.map((exp, i) => (
            { url: exp.url, title: exp.title_en, mixerTitle: exp.mixerTitle_en }
        ));

        let labels = [...exploreLabels];
        let label = labels[0];

        let countries = [...this.state.countryInfo];
        let country = countries.filter(c => c.ID <= 50)
            .sort((a,b) => a.Country.localeCompare(b.Country))
            .map(d => ( { ID: d.ID, EN: d.Country, FR: d.Country_FR } ));
        let listForCountries = country.map(d => ({ value: d.ID, label: d.EN}));

        let regionLists = countries.filter(c => c.ID > 50)
            .sort((a,b) => a.Country.localeCompare(b.Country))
            .map(d => ( { ID: d.ID, EN: d.Country, FR: d.Country_FR } ));
        let regionList = regionLists.map(d => ({ value: d.ID, label: d.EN }));


        if ( this.props.lang === 1 ) {
            label = labels[1];
            contents = exploreMixer.map((e, i) => ({ url: e.url, title: e.title_fr, mixerTitle: e.mixerTitle_fr }));
            regionList = regionLists.map(d=> ( {value: d.ID, label: d.FR} ));
            listForCountries = country.map(d=> ( {value: d.ID, label: d.FR} ));
        };

        let countryList = [
            {
                label: 'Region',
                options: regionList,
            },
            {
                label: 'Countries',
                options: listForCountries
            }
        ];

        let agglos = [...this.state.aggloInfo];
        let agglosList = this.agglosListHandler(this.state.selectedCountry, agglos);
        let countryValue = this.countryValueHandler(this.state.selectedCountry, countryList);
        let firstCompareValue = this.countryValueHandler(this.state.compareFirstCountry, countryList);
        let secondCompareValue = this.countryValueHandler(this.state.compareSecondCountry, countryList);
        let agglosValue = this.agglosValueHandler(this.state.selectedAgglos, this.state.selectedCountry, agglos);
        return (
            <Switch>
                <Route path={`${this.props.match.url}/:topicId`} render={(props) =>
                    <ContentWrapper
                        {...props}
                        path={this.props.match.path}
                        lang={this.props.lang}

                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        countryGeoData={this.state.country_GeoData}
                        agglosGeoData={this.state.agglos_GeoData}
                        regionGeoData={this.state.region_GeoData}
                        regionSelected={this.state.regionSelected}
                        agglosArray={this.state.sizeArray}
                        compareFirstCountry={this.state.compareFirstCountry}
                        compareSecondCountry={this.state.compareSecondCountry}
                        timeSliderValue={this.state.timeSliderValue}

                        agglosValue={agglosValue}
                        countryList={countryList}
                        agglosList={agglosList}
                        contents={contents}
                        countryValue={countryValue}
                        label={label}
                        countryData={countries}
                        agglosData={agglos}
                        firstDisplayValue={firstCompareValue}
                        secondDisplayValue={secondCompareValue}

                        agglosValueToMap={this.handleAgglosValueFromMap}
                        countryValueToMap={this.handleCountryValue}
                        sizeArray={this.handleSizeArray}
                        regionHandler={this.regionHandler}
                        handleSliderValue={this.handleSliderValue}
                        sendHistogramValue={this.handleHistogramValue}

                        firstCompareValueFromMap={this.handleFirstValueFromMap}
                        secondCompareValueFromMap={this.handleSecondValueFromMap}

                        sendCountryValue={this.handleCountryValue}
                        sendAgglosValue={this.handleAgglosValueFromSearch}/> }/>

                <Route exact path={this.props.match.url} render={(props) =>
                    <ContentWrapper
                        {...props}
                        path={this.props.match.path}
                        lang={this.props.lang}

                        selectedCountry={this.state.selectedCountry}
                        selectedAgglos={this.state.selectedAgglos}
                        countryGeoData={this.state.country_GeoData}
                        agglosGeoData={this.state.agglos_GeoData}
                        regionGeoData={this.state.region_GeoData}
                        regionSelected={this.state.regionSelected}
                        agglosArray={this.state.sizeArray}
                        timeSliderValue={this.state.timeSliderValue}

                        agglosValue={agglosValue}
                        countryList={countryList}
                        agglosList={agglosList}
                        contents={contents}
                        countryValue={countryValue}
                        label={label}
                        countryData={countries}
                        agglosData={agglos}

                        agglosValueToMap={this.handleAgglosValueFromMap}
                        countryValueToMap={this.handleCountryValue}
                        sizeArray={this.handleSizeArray}
                        regionHandler={this.regionHandler}
                        handleSliderValue={this.handleSliderValue}
                        sendHistogramValue={this.handleHistogramValue}
                        sendCountryValue={this.handleCountryValue}
                        sendAgglosValue={this.handleAgglosValueFromSearch}/> }/>
            </Switch>
        );
    }
};

export default ExploreContainer;
