var GuidesRoute;

GuidesRoute = Ember.Route.extend({
  model: function() {
    return App.Guide.find();
  }
});

module.exports = GuidesRoute;
