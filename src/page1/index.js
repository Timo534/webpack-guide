import '../common'

function appendChild(ele) {
  document.body.appendChild(ele);
}

function creatEle(eleName, eleText, eleCallback) {
  const btn = document.createElement(eleName);
  
  btn.innerText = eleText
  
  btn.onclick = eleCallback
  
  appendChild(btn)
}

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  appendChild(element);
}

function init() {
  creatEle('h1', '页面一', null)
  creatEle('button', '动态加载', getComponent)
}

init()