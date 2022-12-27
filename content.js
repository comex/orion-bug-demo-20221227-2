let port = chrome.runtime.connect(null, {name: 'asdf'});
console.log('connected port', port);
port.postMessage({foo: 'bar'});
console.log('posted message');
