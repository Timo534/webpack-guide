import '../static/static'
import Vue from 'Vue'

function appendChild(ele) {
  document.body.appendChild(ele);
}

function init() {
  const btn = document.createElement('button');
  
  btn.innerText = '动态加载'
  
  btn.onclick = getComponent
  
  appendChild(btn)
}

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  appendChild(element);
}

init()

window.Vue = function () {
  console.log(Vue)
}

Vue()
