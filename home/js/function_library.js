var deviceAgent = navigator.userAgent.toLowerCase();

var isTouchDevice = Modernizr.touch || 
(deviceAgent.match(/(iphone|ipod|ipad)/) ||
deviceAgent.match(/(android)/)  || 
deviceAgent.match(/(iemobile)/) || 
deviceAgent.match(/iphone/i) || 
deviceAgent.match(/ipad/i) || 
deviceAgent.match(/ipod/i) || 
deviceAgent.match(/blackberry/i) || 
deviceAgent.match(/bada/i));

if (isTouchDevice) {
    console.debug("Mobile")
    this["slidecontainer"].remove();
    this["muteB"].remove();
    this["disableV"].remove();
    this["enableV"].remove();
} else {
    console.debug("Desktop")
}