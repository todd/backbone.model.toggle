test("toggle", function() {
  var model = new Backbone.Model({foo: true, bar: false})
  model.toggle('foo')
  equal(model.get('foo'), false)
  model.toggle('bar')
  equal(model.get('bar'), true)
});