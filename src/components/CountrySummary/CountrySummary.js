import React from 'react';
import AnimateHeight from 'react-animate-height';
import './CountrySummary.css';
const countrySummary = ( props ) => {
    let data = props.data;
    let classes = ['ToggleCountrySummary'];
    if ( props.fold ) {
        classes = ['ToggleCountrySummary active'];
    }

    return (
        <div className="CountrySummary">
            <div onClick={props.clicked} className={classes}> Country Info </div>
            <AnimateHeight height={props.fold} className='CountrySummary_Text'>
                <span>{data.capital}</span><br/>
                <span>{data.population}</span><br/>
                <span>{data.area}</span><br/>
                {data.text}
            </AnimateHeight>
        </div>
    );
};

export default countrySummary;