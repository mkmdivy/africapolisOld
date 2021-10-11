import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ABOUTDATA } from '../../shared/about_data';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

class DataContainer extends Component {
    
    render () {

        let datas = [...ABOUTDATA];
        let content; 

        if(this.props.lang === 0){
            content = datas.map((data, i) => (
                {
                    title: data.title_en,
                    story: data.story_en
                }
            ));
        } else if (this.props.lang === 1) {
            content = datas.map((data,i) => (
                {
                    title: data.title_fr,
                    story: data.story_fr
                }
            ))
        }

        return (
            <Route exact path={this.props.match.url} render={(props) => 
                <ContentWrapper 
                    {...props}
                    content={content}
                    path={this.props.match.path} /> } />
        );
    }
};

export default DataContainer;