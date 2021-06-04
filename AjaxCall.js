let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makeAjaxCall(methodType, url, callback, async = true, data = null) {
    
    let xhr =new XMLHttpRequest();
    xhr.onReadyStateChange =function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            } else if (xhr.status >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error");
            }
        }
    
    }
}
xhr.open(methodType, url, async);
if (data) {
    console.log(JSON.stringify(data));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
} else xhr.send();
console.log(methodType + " request sent to the server");

