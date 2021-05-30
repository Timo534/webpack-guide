import _ from 'lodash'
import Print from './print'

function appendChild(ele) {
  document.body.appendChild(ele);
}

function init() {
  const btn = document.createElement('button');
  
  btn.innerText = '缓存'
  
  btn.onclick = getComponent
  
  appendChild(btn)
}

async function getComponent() {
  const element = document.createElement('div');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print('print webpack');
  
  appendChild(element);
}

init()