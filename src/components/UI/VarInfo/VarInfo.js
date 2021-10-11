import React from 'react';
import MaterialIcon from 'material-icons-react';
import './VarInfo.css';

const varInfo = ( props ) => {

    return (
        <div className="VariableInfoWrapper">
            <MaterialIcon icon="info" size={15} className="icon-color"/>
            <span>{props.info}</span>
        </div>
    );
};

export default varInfo;