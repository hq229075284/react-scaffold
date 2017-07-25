import React from 'react';
import {
  HashRouter as Router,
  // Route,
} from 'react-router-dom';
import Route from './route';
import Bundle from './bundle';

const test = require('bundle-loader?lazy!pages/test');

const asyncTest = props => (<Bundle load={test}>
  {Comp => <Comp {...props} />}
</Bundle>);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
};

const routerMap = () => (
  <Router getUserConfirmation={getConfirmation}>
    <div>
      <Route exact path="/test" component={asyncTest} />
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);
export default routerMap;
