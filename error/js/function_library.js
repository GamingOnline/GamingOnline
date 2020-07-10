var deviceAgent = navigator.userAgent.toLowerCase();

var isTouchDevice = Modernizr.touch ||
    (deviceAgent.match(/(iphone|ipod|ipad)/) ||
        deviceAgent.match(/(android)/) ||
        deviceAgent.match(/(iemobile)/) ||
        deviceAgent.match(/iphone/i) ||
        deviceAgent.match(/ipad/i) ||
        deviceAgent.match(/ipod/i) ||
        deviceAgent.match(/blackberry/i) ||
        deviceAgent.match(/bada/i));

if (isTouchDevice) {
    console.debug("Mobile");
    (document.getElementById("muteB")).remove(); 
    (document.getElementById("disableV")).remove(); 
    (document.getElementById("enableV")).remove(); 
    (document.getElementById("slidecontainer")).remove(); 
    (document.getElementById("player")).remove(); 
    (document.getElementById("footer")).remove();
} else {
    console.debug("Desktop");
    (document.getElementById("img_back")).remove();
}