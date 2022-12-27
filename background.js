chrome.runtime.onConnect.addListener((port) => {
    console.log('onConnect', port.name);
    if (Math.random() >= 0.5) {
        let start = new Date().getTime();
        while (new Date().getTime() - start < 500) {}
        console.log('waited 500ms');
    } else {
        console.log('did not wait');
    }
    port.onMessage.addListener((message) => {
        console.log('onMessage', port.name, message);
    });
});
