App = require('./app')

App.Router.map ->
  @resource 'guides', path: '/', ->
    @resource 'guide', path: ':guide_id'