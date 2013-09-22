require('ember');

var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create({
  classNames: ['component-toggle'],
  classNameBindings: ['isOn:on', 'isOff:off'],
  childViews: ['onView', 'inputView', 'offView'],
  onView: Em.View.extend({
    tagName: 'label',
    template: compile('on')
  }),
  offView: Em.View.extend({
    tagName: 'label',
    template: compile('off')
  }),
  inputView: Em.Checkbox.extend({
    checkedBinding: 'parentView.value'
  }),
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
