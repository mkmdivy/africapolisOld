import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { TREEMAP } from '../../shared/treemap';
import { TREEMAP_BUILDUP } from '../../shared/treemap_buildup';

class HomeComponent extends Component {
    
    state = {
        content: TREEMAP,
        treemap_data: TREEMAP_BUILDUP
    }

    hoverValueHandler = ( value ) => {
        this.setState({ treemapHovered: value })
    }
    
    clickedValueHandler = ( value ) => {
        this.setState({ treemapClicked: value })
    }

    render () {
        let treemaps = [...this.state.content];
        let contents = treemaps.map((treemap, key) => 
            ( 
                { 
                    url: treemap.url, 
                    title: treemap.title_en,
                    text: treemap.description_en,
                    data: treemap.data,
                    measure: treemap.measure,
                    mixerTitle: 'Research'

                } 
            ));

        if ( this.props.lang === 1) {
            contents = treemaps.map((treemap, key) => 
            ( 
                { 
                    url: treemap.url, 
                    title: treemap.title_fr,
                    text: treemap.description_fr,
                    data: treemap.data,
                    measure: treemap.measure,
                    mixerTitle: 'Analyses'
                } 
            ));
        }
        return (
            <Switch>
                <Route exact path={`${this.props.match.url}/:topicId`} render={(props) => 
                    <ContentWrapper 
                        {...props} 
                        path={this.props.match.path} 
                        contents={contents}
                        hoveredValue={this.state.treemapHovered}
                        clickedValue={this.state.treemapClicked}
                        lang={this.props.lang}
                        mapData={this.state.treemap_data}
                        hovered={this.hoverValueHandler} 
                        clicked={this.clickedValueHandler} /> } />
                <Route exact path={this.props.match.url} render={(props) => 
                    <ContentWrapper 
                        {...props}
                        path={this.props.match.path}
                        lang={this.props.lang}
                        contents={contents}
                        hoveredValue={this.state.treemapHovered}
                        clickedValue={this.state.treemapClicked}
                        mapData={this.state.treemap_data}
                        hovered={this.hoverValueHandler} 
                        clicked={this.clickedValueHandler} /> } />
            </Switch>
        );
    }
};

export default HomeComponent;