Backbone.Model.toggle [![Build Status](https://travis-ci.org/todd/backbone.model.toggle.png?branch=master)](https://travis-ci.org/todd/backbone.model.toggle)
=====================

This is an extremely tiny plugin that patches `Backbone.Model` to include a toggle method.

### Example

```javascript
var book = new Backbone.Model({
  available: true
});

book.toggle('available') // Sets available to false
```
