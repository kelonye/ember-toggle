module.exports = Em.Handlebars.compile([

  '<label>on</label>',
  '<input type="checkbox" {{bind-attr checked=value}}>',
  '<label>off</label>',

].join(''));