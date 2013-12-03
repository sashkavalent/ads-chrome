function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    el = document.createElement('p');
    el.innerHTML = xmlHttp.responseText;
    details = new Object();
    details.text = "123";
    chrome.browserAction.setBadgeText(details);
    document.write(el.querySelector('.user a').innerText);
}

function clickHandler(e) {
  httpGet('http://localhost:3000/ads/33')
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});
