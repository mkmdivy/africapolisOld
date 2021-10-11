import React, { Component } from 'react';
import Header from  '../Navigation/Header/Header';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    drawerToggleClick = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    siderDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (
            <React.Fragment>
                <Header drawerToggleClick={this.drawerToggleClick} languageHandler={this.props.languageHandler} lang={this.props.lang}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.siderDrawerClosedHandler} languageHandler={this.props.languageHandler} lang={this.props.lang}/>
                <main className="Layout">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;