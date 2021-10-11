import React from 'react'
import DDS_001 from '../../assets/images/Figure_1.png';
import DDS_002 from '../../assets/images/Figure_2.png';
import DDS_003 from '../../assets/images/Crossborder_Fig_01.png';

const renderImage = ( props ) => {

    let image = null;
    switch(props.select) {
        case 1 :
            image = <img src={DDS_001} width={props.width + '%'} alt={props.alt} />
        break;
        case 2 :
            image = <img src={DDS_002} width={props.width + '%'} alt={props.alt} />
        break;
        case 3 :
            image = <img src={DDS_003} width={props.width + '%'} alt={props.alt} />
        break;
        default: 
            image = null;
    }
    return image; 
};

export default renderImage;