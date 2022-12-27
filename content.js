let port = chrome.runtime.connect(null, {name: 'forward'});
console.log('created forward port');

chrome.runtime.onConnect.addListener((rport) => {
    console.log('got connection named', rport.name);

    rport.onMessage.addListener((message) => {
        console.log(`got message loc=${document.location} port-name=${rport.name} contents=${JSON.stringify(message)}`);
    });
});
