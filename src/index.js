import _ from 'lodash';
import './style.css';
import img from './1.jpg'

function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  element.classList.add('hello');

  // 将图片添加到div
  let myImg = new Image();
  myImg.src = img;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
