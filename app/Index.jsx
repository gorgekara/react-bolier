import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Layout from './components/Layout/Layout.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

class Index extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/about" name="about" component={About} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));