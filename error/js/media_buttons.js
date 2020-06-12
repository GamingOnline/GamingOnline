var buttonB_Landing = function() {
    window.location.href = "design2";
};

var buttonB_mute = function() {
    if (typeof player.setVolume !== 'undefined') {
        player.setVolume(0)
    } else {
        console.log("Function is undefined!")
    }
}

var buttonB_unmute = function() {
    if (typeof player.setVolume !== 'undefined') {
        player.setVolume(videoVolume)
    } else {
        console.log("Function is undefined!")
    }
}