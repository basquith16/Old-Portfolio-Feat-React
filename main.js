"use strict";

class Router extends Backbone.Router {
  get routes() {
    return {
      routes: {
        '': 'index',
        ':blog': 'showBlog',
        ':about': 'showAbout',
        ':portfolio': 'showPortfolio'
      }
    }
  }
  showBlog() {
    $.get('blog.html').then(function(page) {
      $('#content').html(page);
    })
  }
  showAbout() {
    $.get('about.html').then(function(page) {
      $('#content').html(page);
    })
  }
  showPortfolio() {
    $.get('portfolio.html').then(function(page) {
      $('#content').html(page);
    })
  }
};

$(function() {
  const router = new Router();
  Backbone.history.start();
  console.log('history started');
});
