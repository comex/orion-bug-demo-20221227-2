chrome.runtime.onConnect.addListener((port) => {
    let tabId = port.sender.tab.id;
    let frameId = port.sender.frameId;
    console.log('connection from', tabId, frameId);
    let name = `reverse-${tabId}-${frameId}`;
    let reversePort = chrome.tabs.connect(tabId, {frameId: frameId, name: name});
    setTimeout(() => {
        reversePort.postMessage({x: `message to reverse port ${name}`});
    }, 500);
});
