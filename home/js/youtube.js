var tag = document.createElement('script');
var videoID = "Lx1iH8DgrLE"
var videoVolume = 5
var starttime = 72 // 101.7
var endtime = 175 //165
var loopcount = 1;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady()
{
    player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: '' + videoID,
    playerVars: {'showinfo': 0, 'frameborder': 0, 'allowfullscreen': '', 'loop': 1, 'autoplay': 1, 'controls': 0, 'disablekb': 1, 'modestbranding': 1, 'autohide': 1, 'playlist': videoID},
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onStateChanged,
        'onPlaybackQualityChange': onPlaybackQualityChanged
    }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.seekTo(starttime);
    event.target.setVolume(videoVolume);
    event.target.setPlaybackQuality("hd1080");
    onEndLoop(event);
}

function onEndLoop(event) {    
    setTimeout(function() {
        currentTime = event.target.getCurrentTime()
        //console.log(currentTime); 
        if (currentTime >= endtime) {
            event.target.playVideo();
            event.target.seekTo(starttime);
            event.target.setVolume(videoVolume);
        }
        loopcount++;
        if (loopcount < 10) {
            onEndLoop(event);
            loopcount = 1
        }
    }, 1000)
}

function onStateChanged(event) {
    switch (event.data) {
        case 0:
            event.target.playVideo();
            event.target.seekTo(starttime);
            event.target.setVolume(videoVolume);
            event.target.setPlaybackQuality("hd1080");
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 5:
            break;
    }
}

function onPlaybackQualityChanged(event) {
    switch (event.data) {
        case "small":
            event.target.setPlaybackQuality("hd1080");
            break;
        case "medium":
            event.target.setPlaybackQuality("hd1080");
            break;
        case "large":
            event.target.setPlaybackQuality("hd1080");
            break;
        case "hd720":
            event.target.setPlaybackQuality("hd1080");
            break;
        case "hd1080":
            break;
        case "highres":
            event.target.setPlaybackQuality("hd1080");
            break;
    }
}