import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { ABOUTUS  } from '../../shared/aboutswac';

class AboutusContainer extends Component {
    state ={
        AboutUs: ABOUTUS,
    }
    render () {
        let content = [...this.state.AboutUs];
        let logo;
        if(this.props.lang === 1) {
            content = content[1];
            logo = 'assets/images/oecd_fr.png';
        }else{
            content = content[0];
            logo = 'assets/images/oecd_en.png';
        }
        return (
            <Route exact path={this.props.match.url} render={(props) => 
                <ContentWrapper 
                    {...props}
                    content={content}
                    logo={logo}
                    path={this.props.match.path} /> } />
        );
    }
};

export default AboutusContainer;