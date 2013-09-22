require('ember');

var compile = Em.Handlebars.compile;

var onView = Em.View.create({
  tagName: 'label',
  template: compile('on')
});

var offView = Em.View.create({
  tagName: 'label',
  template: compile('off')
});

var inputView = Em.Checkbox.create({
  checkedBinding: 'parentView.value'
});

module.exports = Em.Mixin.create({
  classNames: ['component-toggle'],
  classNameBindings: ['isOn:on', 'isOff:off'],
  childViews: ['onView', 'inputView', 'offView'],
  onView: onView,
  inputView: inputView,
  offView: offView,
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
