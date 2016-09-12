import React from 'react';

import './Layout.scss';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="main" className="container">
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}