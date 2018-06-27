var internalURL = 'http://alephstudios.com';
var publicURL = '//ardamis.com';
var detectionCounter = 0;
var detectionTimeOut = 5;
var detectionImage = 'http://alephstudios.com/testing/intranet/transparent.gif?' + (new Date()).getTime();
var detectionElement = document.createElement('img');
detectionElement.src = detectionImage;

function detectIntranet() {
    detectionCounter = detectionCounter + 1;
    //  alert('Attempt ' + detectionCounter + ': Sniffing intranet connection by loading an internal resource at ' + detectionImage);
    if (detectionElement.complete) {
        if (detectionElement.width > 0 && detectionElement.height > 0) {
            //      alert('Attempt ' + detectionCounter + ': The intranet resource was loaded!');
            window.location = internalURL;
        } else {
            //      alert('Attempt ' + detectionCounter + ': The intranet resource could not be loaded!');
            window.location = publicURL;
        }
    } else {
        if (detectionCounter < detectionTimeOut) {
            setTimeout("detectIntranet()", 1000);
            //      alert('Attempt ' + detectionCounter + ': Still trying to load: ' + detectionImage);
        } else {
            alert('Attempt ' + detectionCounter + ': Gave up trying to load: ' + detectionImage);
            //	  window.location = publicURL;
        }
    }
}

window.onload = function () {
    detectIntranet();
}