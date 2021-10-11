import React from 'react';
import './RenderTotal.css';
import Number from './NumberDisplays/RenderNumber';
import Kilometre from './NumberDisplays/RenderKm';
import Percentage from './NumberDisplays/RenderPercentage';


export const country = ( props ) => {
    let totals = props.data.find(d => d.ID === props.selectedCountry);
    let form = null;
    switch(props.case){
        case 0:
        case 2:
            form = <Number value={totals.var} />;
        break;
        case 1:
        case 3:
        case 5:
            form = <Percentage value={totals.var} />;
        break;
        case 4:
            form = <Kilometre type={'km'} value={totals.var} />;
        break;
        default:
            form = null;
    }
    return form;
};

export const compare = ( props ) => {
    let totals = props.data.find(d => d.ID === props.selectedCountry);
    let form = null;
    switch(props.case){
        case 0:
        case 2:
            form = <Number value={totals.var} typeOf={'compare'} />;
        break;
        case 1:
        case 3:
        case 5:
            form = <Percentage value={totals.var} typeOf={'compare'} />;
        break;
        case 4:
            form = <Kilometre type={'km'} value={totals.var} typeOf={'compare'} />;
        break;
        default:
            form = null;
    }
    return form;
};

export const region = ( props ) => {
    let totals = props.data.find(d => d.ID === props.selectedCountry);
    let form = null;
    switch(props.case) {
        case 0:
        case 1:
            form = <Number value={totals.var}/> ;
        break;
        case 2:
        case 4:
            form = <Percentage value={totals.var} />;
        break;
        case 3:
            form = <Kilometre type={'km'} value={totals.var} />;
        break;
        default:
            form = null;
    }
    return form;
}

export const agglos = ( props ) => {
    let form = null;
    let totals = props.data.find(d => d.ID === props.selectedAgglos);
    switch(props.case) {
        case 0:
            form = <Number value={totals.var} />;
        break;

        case 1:
            form = <Kilometre type={'perinhab'} value={totals.var} />;
        break;

        case 3:
        case 4:
            form = <Kilometre type={'squaremetre'} value={totals.var} />;
        break;

        case 2:
            form = <Kilometre type={'metro'} value={totals.var} />;
        break;
        default:
            form = null;
    }
    return form;
};