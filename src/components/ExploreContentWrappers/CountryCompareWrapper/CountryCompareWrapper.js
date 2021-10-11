import React, { Component } from 'react';
import CompareHistogram from '../../Histogram/CompareHistogram/CompareHistogram';
import HistogramWrapper from '../../Histogram/HistogramWrapper';
import { COMPARE_HISTOGRAM_LABEL } from '../../Histogram/CompareHistogram/CompareHistogramItems/CompareHistogramLabels/CompareHistogramLabels';
import { HISTOGRAM_LABEL } from '../Labels/Labels';

class CountryCompareWrapper extends Component { 
 
    render () {
        let props = this.props;
        let c_label = COMPARE_HISTOGRAM_LABEL[0].ENG;
        let histogramLabel = HISTOGRAM_LABEL;
        let compareHistogramData;
        let compareItems = [];
        let compareVariables = ['Upop2015', 'Ulvl_Scaled2015', 'NumAgglos2015', 'Mpop2015', 'ADBC2015', 'Usurf'];

        let label = histogramLabel[0];
        if ( this.props.lang === 1 ) {
            c_label = COMPARE_HISTOGRAM_LABEL[1].FR;
            label = histogramLabel[1];
        }
        let countryListForCompare = props.countryData.filter(c => c.ID <= 50);
        
        compareVariables.forEach((compareVariable, key) => {
            compareItems.push(
                { 
                    ID: key,
                    title: c_label[key],
                    variable: countryListForCompare.map(d => (
                        {
                            ID: d.ID,
                            case: key,
                            country: d.Country,
                            var: d[compareVariable]
                        }
                    )).sort((a,b) => a.var - b.var)
                });
        });
        compareHistogramData = compareItems;
        if ( this.props.compareFirstCountry && this.props.compareSecondCountry ) {
            return (
                <HistogramWrapper histogramLabel={label} type={'compare'} >
                    <CompareHistogram 
                        firstValue={props.compareFirstCountry}
                        secondValue={props.compareSecondCountry}
                        data={compareHistogramData}
                        label={label} />
                </HistogramWrapper>
            )    
        } else { return <div></div> }
        
    }
}

export default CountryCompareWrapper;