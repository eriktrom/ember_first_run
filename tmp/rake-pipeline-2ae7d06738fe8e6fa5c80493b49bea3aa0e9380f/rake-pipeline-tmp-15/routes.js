(function() {

  App.Router.map(function() {
    return this.resource('guides', {
      path: '/'
    }, function() {
      return this.resource('guide', {
        path: ':guide_id'
      });
    });
  });

}).call(this);
