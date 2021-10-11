import React from 'react';
import Info from '../../../../UI/VarInfo/VarInfo';
import * as Ranking from '../../../HistogramComponents/RenderRanking/RenderRanking';
import * as Total from '../../../HistogramComponents/RenderTotal/RenderTotal';
import Indicator from '../../../HistogramComponents/RenderIndicator/RenderIndicator';
import './CompareHistogramItem.css';

const countryHistogramItem = ( props ) => {
    let title = ( <div className="CompareHistogramItem_Title Compare"> {props.title.var}  <Info info={props.title.des} /> </div> );
    let firstCountry = (
        <div className='FirstCountryCompare'>
            <Ranking.compare selectedCountry={props.firstValue} data={props.data} country={'first'} />
            <Total.compare selectedCountry={props.firstValue} data={props.data} case={props.case} />
        </div>
    );
    let secondCountry = (
        <div className='SecondCountryCompare'>
            <Ranking.compare selectedCountry={props.secondValue} data={props.data} country={'second'} />
            <Total.compare selectedCountry={props.secondValue} data={props.data} case={props.case} />
        </div>
    );
    let indicator = <Indicator {...props} />;
    return (
        <React.Fragment>
            {title}
            {firstCountry}
            {indicator}
            {secondCountry}
        </React.Fragment>
    )
}

export default countryHistogramItem;