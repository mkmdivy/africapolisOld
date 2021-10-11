import React, { Component } from 'react';
import Content from '../Content/Content';
import './ContentContainer.css';

class ExploreContentContainer extends Component {
    
    render() {
        return (
            <div id="ContentContainer">
                <Content {...this.props} />
            </div>
        )
    }
}

export default ExploreContentContainer;