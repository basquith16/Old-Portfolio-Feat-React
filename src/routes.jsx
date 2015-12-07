var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var About = require('./components/about');
var Portfolio = require('./components/portfolio');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="1" component={About} />
      <Route path="2" component={Portfolio} />
  </Route>
  </Router>
)
