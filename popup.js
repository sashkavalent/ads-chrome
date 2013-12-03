document.addEventListener('DOMContentLoaded', function () {
  httpGet();
});

function setPopupHtml(host)
{
    anchors = document.getElementsByTagName('a');
    for (var i = 0; i < anchors.length; i++)
    {
        if (i % 2 == 0)
        {
            link = anchors[i].getAttribute('href');
            anchors[i].setAttribute('href', host + link);
        }
        else
        {
            anchors[i].innerHTML = '';
        }
    }
    document.head.innerHTML = '<base target="_blank">';
}

function httpGet()
{
    var xmlHttp = null;
    var host = 'http://localhost:3000';

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", host + '/announcements', false );
    xmlHttp.send( null );
    el = document.createElement('p');
    el.innerHTML = xmlHttp.responseText;

    details = new Object();
    details.text = el.querySelector('.comments-header').innerHTML.replace(/\D*/g, '');
    chrome.browserAction.setBadgeText(details);

    document.write(el.querySelector('.models').innerHTML);

    setPopupHtml(host);
}

