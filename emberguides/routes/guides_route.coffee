class GuidesRoute extends Ember.Route
  model: ->
    App.Guide.find()

module.exports = GuidesRoute