import React from 'react';
import DataDownloadItem from './DataDownloadItem/DataDownloadItem';
import './DataDownloadItems.css';

const dataDownloadItems = ( props ) => {
    let wrapper = (
        <div className='DataDownloadItemsContainer'>
            {props.data.map((d,i) => (
                <DataDownloadItem key={i} link={d.link} title={d.title} />
            ))}
        </div>
    )
    return (
        <div className='DataDownloadItems'>
            <h5>Download</h5>
            {wrapper}
        </div>
    );
};

export default dataDownloadItems;