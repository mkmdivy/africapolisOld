import React from 'react';
import './DataDownloadItem.css';

const dataDownloadItem = props => (
    <div className='DataDownloadItem'>
        {/* <i className='material-icons active'>vertical_align_bottom</i> */}
        <a href={props.link}>{props.title}</a>
    </div>
);

export default dataDownloadItem;