var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Blog = require('./components/blog');
var About = require('./components/about');
var Portfolio = require('./components/portfolio');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="blog" component={Blog} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
  </Route>
  </Router>
)
