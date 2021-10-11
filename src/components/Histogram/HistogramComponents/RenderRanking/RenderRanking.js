import React from 'react';
import './RenderRanking.css';

export const country = ( props ) => {
    let countries = props.data.map(u => u.ID);
    let ranks = props.data.length - (countries.findIndex((e) => e === props.selectedCountry) + 1);
    return(
        <div className="CountryRanking">
            <p>{props.histogramLabel.rank}: <br/> <span> {ranks + 1}</span>/{props.data.length} </p>
        </div>
    )
}

export const region = ( props ) => {
    let countries = props.data.map(u => u.ID);
    let ranks = props.data.length - (countries.findIndex((e) => e === props.selectedCountry) + 1);
    return (
        <div className="CountryRanking">
            <p>{props.histogramLabel.rank}: <br/> <span> {ranks + 1}</span>/{props.data.length} </p>
        </div>
    )
}

export const compare = ( props ) => {
    let countries = props.data.map(u => u.ID);
    let ranks = props.data.length - (countries.findIndex((e) => e === props.selectedCountry) + 1);
    let classes;

    if(props.country === 'first'){
        classes = 'CountryRankingFirst';
    }else if(props.country === 'second'){
        classes = 'CountryRankingSecond';
    }
    return(
        <div className={classes}>
            <p><span>{ranks + 1}</span>/{props.data.length} </p>
        </div>
    )
}

export const agglos = ( props ) => {
    let agglos = props.data.map(u => u.ID);
    if ( props.data[agglos.findIndex((e) => e === props.selectedAgglos)]['var'] === 0 ) {
        return(
            <div className="AgglosRanking">
                <p>{props.histogramLabel.rank}:<br/><span>-</span>/{props.data.length}</p>
            </div>
        )
    } else {
        let rank = props.data.length - (agglos.findIndex((e) => e === props.selectedAgglos) + 1);
        return (
            <div className="AgglosRanking">
                <p>{props.histogramLabel.rank}:<br/><span>{ rank + 1 }</span>/{props.data.length}</p>
            </div>
        )
    }
}