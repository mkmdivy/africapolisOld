import React, { Component } from 'react';
import CountryHistogram from '../../Histogram/CountryHistogram/CountryHistogram';
import AgglosHistogram from '../../Histogram/AgglosHistogram/AgglosHistogram';
import RegionHistogram from '../../Histogram/RegionHistogram/RegionHistogram';
import HistogramWrapper from '../../Histogram/HistogramWrapper';
import CountrySummary from '../../CountrySummary/CountrySummary';
import RenderFilter from '../../Histogram/HistogramComponents/RenderFilter/RenderFilter';
import { COUNTRY_HISTOGRAM_LABEL } from '../../Histogram/CountryHistogram/CountryHistogramLabels/CountryHistogramLabels';
import { AGGLOS_HISTOGRAM_LABEL } from '../../Histogram/AgglosHistogram/AgglosHistogramLabels/AgglosHistogramLabels';
import { REGION_HISTOGRAM_LABEL } from '../../Histogram/RegionHistogram/RegionHistogramLabels/RegionHistogramLabels';
import { LEGEND_LABEL, HISTOGRAM_LABEL, LEGEND_CONFIG } from '../Labels/Labels';

class CountryInfoWrapper extends Component { 
    state = {
        countryHeight: 'auto',
        height: 0
    };

    foldCountryInfo = () => { this.setState({ height: this.state.height === 0 ? "auto" : 0 }) };
    foldCountrySection = () => { this.setState({ countryHeight: this.state.countryHeight === 'auto' ? 0 : 'auto' }) };

    fitTimeSlider = (data, variable, value) => {
        for (let j = 0; j < variable.length; j++) {
            for(let i = 0; i < data.length; i++) {
                if(data[i][variable[j]+"_sel"]) {
                    delete data[i][variable[j]+"_sel"];
                }
                Object.defineProperty(data[i], variable[j]+"_sel",
                Object.getOwnPropertyDescriptor(data[i], variable[j] + value));
            }
        }
    };
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectedCountry && this.props.selectedAgglos !== prevProps.selectedAgglos) {
            this.setState({ countryHeight: 0 })
        }
        if((this.props.selectedAgglos !== prevProps.selectedAgglos && 
            this.props.selectedCountry !== prevProps.selectedCountry &&
            this.props.selectedAgglos === '') || 
            (prevProps.selectedAgglos !== this.state.selectedAgglos &&
            this.props.selectedCountry !== prevProps.selectedCountry &&
            this.state.countryHeight === 0) ) {
            this.setState({ countryHeight: 'auto' })
        }
    }

    render () {
        let props = this.props;
        let c_label = COUNTRY_HISTOGRAM_LABEL[0].ENG;
        let a_label = AGGLOS_HISTOGRAM_LABEL[0].ENG;
        let r_label = REGION_HISTOGRAM_LABEL[0].ENG;
        let histogramLabel = HISTOGRAM_LABEL[0];
        let legend = LEGEND_LABEL[0];
        let legendConfig = LEGEND_CONFIG;
        let countryItems = [];
        let regionItems = [];
        let agglosItems = [];
        let countryHistogramData;
        let regionHistogramData;
        let agglosHistogramData;
        let countryList = props.countryData.filter(u => u.ID <= 50);
        let regionList = props.countryData.filter(u => u.ID > 50);
        let agglosData = props.agglosData.filter(d => (d.ID === props.selectedCountry));
        let countryVariables = [ 'Upop_sel', 'Ulvl_Scaled_sel', 'NumAgglos_sel', 'Mpop_sel', 'ADBC_sel', 'Usurf'];
        let regionVariables = [ 'SumOfUpop_sel', 'SumOfNumAgglos_sel', 'UrbanLevel_sel', 'ADBA_sel', 'AvgOfMpop_sel' ];
        let agglosVariables = [ 'Population', 'Density', 'DistToMetro', 'Build_up', 'Voronoi' ];
        let timeLineVarForCountry = ["Upop","NumAgglos","ADBC","Mpop","Ulvl_Scaled"];
        let timeLineVarForRegion = [ 'SumOfUpop', 'SumOfNumAgglos', 'UrbanLevel', 'ADBA', 'AvgOfMpop' ];

        let summaries = props.countryData.map(d => ( 
            {
                ID: d.ID,
                capital: d.Capital,
                area: d.Area,
                population: d.Population,
                text: d.Text_EN
            } 
        )).find(u => u.ID === props.selectedCountry);

        if ( this.props.lang === 1 ) {
            histogramLabel = HISTOGRAM_LABEL[1];
            c_label = COUNTRY_HISTOGRAM_LABEL[1].FR;
            a_label = AGGLOS_HISTOGRAM_LABEL[1].FR;
            r_label = REGION_HISTOGRAM_LABEL[1].FR;
            legend = LEGEND_LABEL[1];
            summaries = props.countryData.map(d => ( 
                {
                    ID: d.ID,
                    capital: d.Capital,
                    area: d.Area,
                    population: d.Population,
                    text: d.Text_FR
                } 
            )).find(u => u.ID === props.selectedCountry);
        };
        
        //Timeslider 
        if(countryList){ this.fitTimeSlider(countryList, timeLineVarForCountry, props.timeSliderValue); };
        if(regionList){ this.fitTimeSlider(regionList, timeLineVarForRegion, props.timeSliderValue); };
        //Country histogram data
        countryVariables.forEach((countryVariable, key) => {
            countryItems.push(
                { 
                    ID: key,
                    title: c_label[key],
                    variable: countryList.map(d => (
                        {
                            ID: d.ID,
                            case: key,
                            country: d.Country,
                            var: d[countryVariable]
                        }
                    )).sort((a,b) => a.var - b.var)
                });
        });
        countryItems[4].variable.sort((a,b) => b.var - a.var);
        countryHistogramData = countryItems;

        //Agglos histogram data
        agglosVariables.forEach((agglosVariable, key) => {
            agglosItems.push(
                {
                    ID: key,
                    title: a_label[key],
                    variable: agglosData.map(d => (
                        {
                            ID: d.City_ID,
                            case: key,
                            city: d.cityName,
                            var: d[agglosVariable],
                            metro: d.Closest_Metropolitan
                        }
                    )).sort((a,b) => a.var - b.var)
                });
        });
        agglosItems[2].variable.sort((a,b) => b.var - a.var);
        let populationTimeline = {
            ID: 5,
            title: a_label[5],
            variable: agglosData.filter(u => u.City_ID === props.selectedAgglos)
                .map((d) => (
                    [
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "1950", pop: d.P1950 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "1960", pop: d.P1960 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "1970", pop: d.P1970 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "1980", pop: d.P1980 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "1990", pop: d.P1990 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "2000", pop: d.P2000 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "2010", pop: d.P2010 },
                        { ID: d.City_ID, case: 5, agglos: d.cityName, year: "2015", pop: d.Population}
                    ]
                ))
            }
        agglosItems.splice(5,0, populationTimeline);
        agglosHistogramData = agglosItems;
                
        //Region histogram data
        regionVariables.forEach((regionVariable, key) => {
            regionItems.push(
                {
                    ID: key,
                    title: r_label[key],
                    variable: regionList.map(d => (
                        {
                            ID: d.ID,
                            case: key,
                            country: d.Country,
                            var: d[regionVariable]
                        }
                    )).sort((a,b) => a.var - b.var)
                }   
            )
        });
        regionItems[3].variable.sort((a,b) => b.var - a.var);
        regionHistogramData = regionItems;
        
        if ( (props.selectedCountry || props.selectedAgglos) && props.selectedCountry !== '') {
            if( props.selectedCountry <= 50 ) {
                return (
                    <React.Fragment>
                        <HistogramWrapper selectedAgglos={this.props.selectedAgglos} histogramLabel={histogramLabel} type={'country'} clicked={this.foldCountrySection} fold={this.state.countryHeight}>
                            <RenderFilter legend={legend} legendConfig={legendConfig} {...props} />
                            <CountrySummary data={summaries} clicked={this.foldCountryInfo} fold={this.state.height} />
                            <CountryHistogram 
                                histogramLabel={histogramLabel}
                                data={countryHistogramData}
                                {...props} />
                        </HistogramWrapper>
                        <AgglosHistogram 
                            data={agglosHistogramData}
                            histogramLabel={histogramLabel}
                            {...props} />
                    </React.Fragment>
                )
            } else if ( props.selectedCountry > 50 ) {
                return (
                    <React.Fragment>
                        <HistogramWrapper histogramLabel={histogramLabel} type={'region'}>
                            <RenderFilter legend={legend} legendConfig={legendConfig} {...props} />
                            <RegionHistogram 
                                data={regionHistogramData} 
                                histogramLabel={histogramLabel}
                                {...props} />
                        </HistogramWrapper>
                    </React.Fragment>
                )
            }
        } else { return <div></div> }
        
    };
}

export default CountryInfoWrapper;