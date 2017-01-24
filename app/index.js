var USER_DATA = {
  name: 'Greta',
  username: 'gretak',
  imageUrl: 'http://gretakava.6te.net/puzzle/img/snow/snow_02.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');


ReactDOM.render (
routes,
document.getElementById('app')
);