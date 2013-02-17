(function() {
  var Guide;

  Guide = DS.Model.extend({
    title: DS.attr('string')
  });

  Guide.FIXTURES = [
    {
      id: 1,
      title: 'topic 1'
    }, {
      id: 2,
      title: 'topic 2'
    }, {
      id: 3,
      title: 'topic 3'
    }
  ];

  module.exports = Guide;

}).call(this);
