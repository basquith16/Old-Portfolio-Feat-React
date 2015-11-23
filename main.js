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
        $('.content').html(page);
          })
      }
  };

  $(function() {
    const router = new Router();
    Backbone.history.start();
  });
