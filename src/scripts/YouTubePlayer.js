const firstScriptTag = document.getElementsByTagName('script')[0];
const tag = document.createElement('script');
const videoId = '6oAd2mkDsdg';

let player;
let done = false;

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/** This function creates an <iframe> (and YouTube player) after the API code downloads. **/
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

/** The API will call this function when the video player is ready. **/
function onPlayerReady(event) {
    //event.target.playVideo();
}

/** The API calls this function when the player's state changes. **/
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

function getPlayer() {
    return player;
}

function playVideo() {
    player.playVideo();
}

function stopVideo() {
    player.stopVideo();
}

