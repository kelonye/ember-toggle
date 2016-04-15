/**
 * Module dependencies.
 */
require('ember');


module.exports = Em.Mixin.create({
  classNames: ['component-toggle'],
  classNameBindings: ['isOn:on', 'isOff:off'],
  isOn: function(){
    return !! this.get('value');
  }.property('value'),
  isOff: function(){
    return !!! this.get('value');
  }.property('value'),
  click: function(){
    this.toggleProperty('value');
  }
});
