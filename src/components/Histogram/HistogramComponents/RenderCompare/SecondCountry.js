import React from 'react';

const secondCountry = ( props ) => {
    let countries = props.data.map(u => u.ID);
    let totals = props.data.find(d => d.ID === props.secondValue)
    let ranks = props.data.length - (countries.findIndex((e) => e === props.secondValue) + 1)
    
    let renderNumber = renderNumbers(props.label.rank, ranks, props.data.length, totals);
    let renderPercentage = renderPercentages(props.label.rank, ranks, props.data.length, totals);
    let renderKm = renderKms(props.label.rank, ranks, props.data.length, totals);
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
    }
    return compare;
};

const renderNumbers = (rank, ranks, datalength, total) => {
    return (
        <div>
            <p>{rank}: <br/> <span> {ranks + 1}</span>/{datalength} </p>
            <p>{total.var.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        </div>
    )
}

const renderKms = (rank, ranks, datalength, totals) => {
    return (
        <div>
        <p>{rank}: <br/> <span> {ranks + 1}</span>/{datalength} </p>
        <p>{Math.round(totals.var) + 'km'}</p>
    </div>
    )
}

const renderPercentages = (rank, ranks, datalength, totals) => {
    return(
            <div>
                <p>{rank}: <br/> <span> {ranks + 1}</span>/{datalength} </p>
                <p>{Math.round(totals.var * 100) + '%'}</p>
            </div>
    )
}

export default secondCountry;