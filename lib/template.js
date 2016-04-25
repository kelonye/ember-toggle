module.exports = Em.Handlebars.compile([

  '<label>on</label>',
  '<div class="toggle-switch">',
    '<input type="checkbox" {{bind-attr checked=value}}>',
  '</div>',
  '<label>off</label>',

].join(''));