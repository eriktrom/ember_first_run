// var IndexRoute = Ember.Route.extend({
//   model: function() {
//     return App.Guide.find(1);
//   }
// });

// var GuidesIndexRoute = Ember.Route.extend({
//   model: function() {
//     return App.Guide.find(1);
//   }
// });

var GuidesRoute = Ember.Route.extend({
  model: function() {
    return App.Guide.find();
  }
});

// module.exports = GuidesIndexRoute;
module.exports = GuidesRoute;
