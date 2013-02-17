var App = require('./app');

App.Router.map(function() {
  this.resource('guides', {path: '/'}, function() {
    this.resource('guide', {path: ':guide_id'});
  });
});

