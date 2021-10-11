import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { NARRATIVES } from '../../shared/narratives';

class HomeComponent extends Component {
    
    state = {
        narratives: NARRATIVES
    }

    render () {
        let narratives = [...this.state.narratives];
        let contents = narratives.map((content, key) => 
            ( 
                { 
                    url: content.url, 
                    title: content.title_en,
                    text: content.story_en,
                    mixerTitle: 'What is Africapolis', 
                } 
            ));
        
        if ( this.props.lang === 1 ) {
            contents = narratives.map((content, key) => (
                {
                    url: content.url,
                    title: content.title_fr,
                    text: content.story_fr,
                    mixerTitle: 'What is Africapolis'
                }
            ))
        }
        return (
            <Switch>
                <Route exact path={`${this.props.match.url}/:topicId`} render={(props) => 
                    <ContentWrapper 
                        {...props}
                        lang={this.props.lang} 
                        path={this.props.match.path} 
                        contents={contents} /> } />
                <Route exact path={this.props.match.url} render={(props) => 
                    <ContentWrapper 
                        {...props}
                        lang={this.props.lang}
                        path={this.props.match.path}
                        contents={contents} /> } />
            </Switch>
        );
    }
};

export default HomeComponent;