// Backbone.Model.toggle.js 0.1.0

// (c) 2013 Todd Bealmear
// Distributed under the MIT License.
// https://github.com/todd/backbone.model.toggle


// Adds a `toggle` method to Backbone.Model.
// Toggles the value of an attribute and fires a `"change"`.
Backbone.Model.prototype.toggle = function(attr, options) {
  options = options ? _.clone(options) : {}
  return this.set(attr, !this.get(attr), options);
}
