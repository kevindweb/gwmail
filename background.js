/**************************************/
// For BACKGROUND PAGE
/*
    1. You need to proxy reqeusts to "my.gwu.edu" through background page and enable cross-site-scripting through chrome.webRequest.addRequestListener???
        - Add 'Access-Control-Allow-Origin' for mail.google.com
*/
var HEADERS_TO_STRIP_LOWERCASE = [
    'content-security-policy',
    'x-frame-options',
];

chrome.webRequest.onHeadersReceived.addListener(function (details) {
    details.responseHeaders.push({
        name: 'Access-Control-Allow-Origin',
        value: '*'
    }, {
        name: 'access-control-allow-origin',
        value: '*'
    }, )
    // console.log(details);
    return {responseHeaders: details.responseHeaders}
  }, {
    urls: ["https://my.gwu.edu/*"]
}, ["blocking", "responseHeaders"]);
/****************************************/
