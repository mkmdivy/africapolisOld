import React, { Component } from 'react';
import * as Contents from './Contents/Contents';
import './ContentWrapper.css';

class ContentWrapper extends Component {

    state = {
        mixerOpen: false,
        switchContent: false,
    }

    mixerHandler = () => {
        this.setState((prevState) => {
            return { mixerOpen: !prevState.mixerOpen}
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.topicId !== prevProps.match.params.topicId) {
            window.scrollTo(0,0);
        }
    }

    contentSwitch = (e) => {
        this.setState((prevState) => {
            return { switchContent: !prevState.switchContent }
        })
    }

    pageScrollHandler = (top, bottom, trigger) => {
        if(top < trigger) {
            this.setState({ scrollValue: 1 })
        } else {
            this.setState({ scrollValue: 2 })
        }
    }

    render() {
        
        let page = null;
        switch (this.props.path) {
            case ('/home'):
                page = <Contents.home
                    {...this.props}
                    mixerOpen={this.state.mixerOpen}
                    scrollValue={this.state.scrollValue}
                    switchContent={this.state.switchContent}
                    pageOffset={this.pageScrollHandler}
                    mixerHandler={this.mixerHandler}
                    handleMobileMixer={this.mixerHandler}
                    changed={this.mixerHandler}
                    handleSwitch={this.contentSwitch} />
                break;
            case ('/explore'):
                page = <Contents.explore
                    {...this.props}
                    mixerOpen={this.state.mixerOpen}
                    mixerHandler={this.mixerHandler}
                    changed={this.mixerHandler}
                    handleMobileMixer={this.mixerHandler}
                    handleSwitch={this.contentSwitch}
                    switchContent={this.state.switchContent} />
                break;
            case ('/research'):
                page = <Contents.home
                    {...this.props} 
                    mixerOpen={this.state.mixerOpen}
                    switchContent={this.state.switchContent}
                    scrollValue={this.state.scrollValue}
                    mixerHandler={this.mixerHandler}
                    handleMobileMixer={this.mixerHandler}
                    changed={this.mixerHandler}
                    handleSwitch={this.contentSwitch}
                    pageOffset={this.pageScrollHandler} />
            break;
            case ('/data'):
                page = <Contents.data {...this.props} />
            break;
            case ('/aboutus'):
                page = <Contents.aboutus {...this.props} />
                break;
            default:
                page = null;
        }
        return page;
    }
}

export default ContentWrapper;
