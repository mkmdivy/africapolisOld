import React, { Component } from 'react';
import Content from '../Content/Content';
import './ContentContainer.css';

class HoemContentContainer extends Component {
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.url !== this.props.match.url){
            document.getElementById('ContentContainer').scrollTop = 0;
        }
    }

    componentDidMount() {
        document.getElementById('ContentContainer').addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        document.getElementById('ContentContainer').removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let top = Math.round(event.srcElement.scrollTop);
        let bottom = Math.round(top + window.innerHeight);
        let triggerPoint = window.innerHeight/2;
        this.props.pageOffset(top, bottom, triggerPoint);
    }

    render() {
        return (
            <div id='ContentContainer'> 
                <Content 
                    match={this.props.match} 
                    path={this.props.path} 
                    contents={this.props.contents} 
                    text={this.props.text} 
                    hovered={this.props.hovered} 
                    clicked={this.props.clicked}/>
            </div>
        )
    }
}

export default HoemContentContainer;