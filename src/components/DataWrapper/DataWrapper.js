import React from 'react';
import './DataWrapper.css';
import DataDownloadItems from './DataDownloadItems/DataDownloadItems';
import { DATAFILES } from './DataFiles/DataFiles';

const dataWrapper = ( props ) => {

    let aboutData = (
        <div className='AboutDataWrapper'>
            <h5>{props.content[0].title}</h5>
            {props.content[0].story[0].storyText.map((u,i) => (
                <p key={i}>{u.text}</p>
            ))}
            
        </div>
    )


    return (
        <div className='DataWrapper'>
            <DataDownloadItems data={DATAFILES} />
            <hr/>
            {aboutData}
        </div>        
    );
};

export default dataWrapper;

