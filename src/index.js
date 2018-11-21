import _ from 'lodash';
import print from './print.js';

function component () {
  var element = document.createElement('div');

  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], '');
  btn.onClick = HTMLIFrameElement.printMe

  btn.innerHTML = 'Click me and check the console';

  element.appendChild(btn);
  console.log("this is test")
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the update printMe module');
    printMe();
  })
}
