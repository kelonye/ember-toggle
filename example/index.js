var toggle = require('ember-toggle');
App = Em.Application.create();

App.ToggleInputComponent = Em.Component.extend(toggle);

Em.TEMPLATES['components/toggle-input'] = require('ember-toggle/lib/template');

App.IndexRoute = Em.Route.extend({
  model: function(){
    return true
  }
});