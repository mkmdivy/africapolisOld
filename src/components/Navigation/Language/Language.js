import React from 'react';
import './Language.css';

const language = ( props ) => {

    return (
        <div className="Language">
            <ul>
                <li onClick={props.languageHandler} value='0' className={props.lang === 0 ? 'Language En' : 'Language'}>EN</li>
                <li onClick={props.languageHandler} value='1' className={props.lang === 1 ? 'Language Fr' : 'Language'}>FR</li>
            </ul>
        </div>
    );
}


export default language;