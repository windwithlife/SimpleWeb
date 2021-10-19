import React, { Component } from 'react';
//import {HashRouter as Router, withRouter } from "react-router-dom";
//import {HashHistory} from '@components/route/HistoryRouter';

import { Layout } from 'antd';
let { Content, } = Layout;

import { Header, Header3, Footer, Footer1, Block5, Block0, Block3 } from 'simple-framework';


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
        <Header menuClick={this.onMenuClick}   style={{ color: '#fff', background: '#000' }} />
        <Content style={{minHeight:'800px'}}>
          {that.props.children}
        </Content>
      </Layout>
    )

  }
}

export default SimpleLayout;