(function() {
  var GuidesRoute,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  GuidesRoute = (function(_super) {

    __extends(GuidesRoute, _super);

    function GuidesRoute() {
      return GuidesRoute.__super__.constructor.apply(this, arguments);
    }

    GuidesRoute.prototype.model = function() {
      return App.Guide.find();
    };

    return GuidesRoute;

  })(Ember.Route);

  module.exports = GuidesRoute;

}).call(this);
