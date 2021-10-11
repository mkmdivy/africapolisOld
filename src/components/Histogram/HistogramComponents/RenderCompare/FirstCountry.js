import React from 'react';
import './RenderCompare.css';

const firstCountry = ( props ) => {
    let firstCountry = props.data.find(d => d.ID === props.firstValue)
    let secondCountry = props.data.find( d => d.ID === props.secondValue);
    let renderNumber = renderNumbers(firstCountry, secondCountry);
    let renderPercentage = renderPercentages(firstCountry, secondCountry,);
    let renderKm = renderKms(firstCountry, secondCountry);
    let compare = null;

    switch(props.case){
        case 0:
        case 2:
            compare = renderNumber
        break;
        case 1:
        case 5:
        case 3:
            compare = renderPercentage;
        break;
        case 4:
            compare = renderKm;
        break;
        default:
            compare = null;
    }
    return compare;
};

const renderNumbers = (first, second) => {
    return (
        <div className='CompareVariables'>
            <div className='FirstCountry'>
                {/* <p>{first.country}:</p> */}
                <p>{first.var.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
            <div className='SecondCountry'>
                {/* <p>{second.country}: &nbsp;</p> */}
                <p>{second.var.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
            
        </div>
    )
}

const renderKms = (first, second) => {
    return (
        <div className='CompareVariables'>
            <div className='FirstCountry'>
                {/* <p>{first.country}:</p> */}
                <p>{Math.round(first.var) + 'km'}</p>
            </div>
            <div className='SecondCountry'>
                {/* <p>{second.country}:</p> */}
                <p>{Math.round(second.var) + 'km'}</p>
            </div>
        </div>
    )
}

const renderPercentages = (first, second) => {
    return(
        <div className='CompareVariables'>
            <div className='FirstCountry'>
                {/* <p>{first.country}:</p> */}
                <p>{Math.round(first.var * 100) + '%'}</p>
            </div>
            <div className='SecondCountry'>
                {/* <p>{second.country}:</p> */}
                <p>{Math.round(second.var * 100) + '%'}</p>
            </div>
        
        </div>
    )
}

export default firstCountry;