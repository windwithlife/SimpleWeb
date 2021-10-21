import React, { Component } from 'react';
//import {HashRouter as Router, withRouter } from "react-router-dom";
//import {HashHistory} from '@components/route/HistoryRouter';

import { Layout } from 'antd';
let { Content, } = Layout;

import { Header } from 'simple-framework';
//import {Header} from 'simple-framework/lib/components/header';
//var Header = require('simple-framework/lib/components/header').default;
//var Button = require('antd/lib/button').default;
//require('simple-framework/lib/components/header/style');
//let Header = require('simple-framework').Header;
//require('simple-framework/lib/components/section/landing/less/nav0.less')
// import {Hedader} from 'simple-framework/'

class SimpleLayout extends Component {
  constructor(props) {
    super(props);
    console.log('header...')
  }

  componentDidMount() {
    
    console.log('header... didmount', this.props.history)
  }

  onMenuClick = (item) => {
    console.log('simple-web on header menu click',item);
    //HashHistory.push(item.path);
  }
  render() {
    console.log('header... render')
    let that = this;
    return (
      <Layout>
        {/* <Button>teste</Button> */}
        <Header menuClick={this.onMenuClick}   style={{ color: '#fff', background: '#000' }} />
        <Content style={{minHeight:'800px'}}>
          {that.props.children}
        </Content>
      </Layout>
    )

  }
}

export default SimpleLayout;