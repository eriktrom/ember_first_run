GuidesRoute = Ember.Route.extend
  model: ->
    App.Guide.find()

module.exports = GuidesRoute