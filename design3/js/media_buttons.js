var buttonB_Landing = function () {
    window.location.href = "../";
};

var volumeSlider = document.getElementById("volumeSlider");
volumeSlider.oninput = function () {
    player.setVolume(this.value)
}

var buttonB_muteVideo = function () {
    player.setVolume(0)
    document.getElementById("volumeSlider").value = 0
}

var buttonB_disableVideo = function () {
    player.setVolume(0)
    player.pauseVideo()
    document.getElementById("player").style.display = "none"
    document.getElementById("slidecontainer").style.display = "none"
    document.getElementById("muteB").style.display = "none"
}

var buttonB_enableVideo = function () {
    player.setVolume(volumeSlider.value)
    player.playVideo()
    document.getElementById("player").style.display = "block"
    document.getElementById("slidecontainer").style.display = "block"
    document.getElementById("muteB").style.display = "block"
}

var redirect_steam = function () {
    window.location.href = "https://steamcommunity.com/id/GamingOnline/";
};
