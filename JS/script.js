//create copyright year
var today = new Date();
var year = today.getFullYear();

var date = document.getElementById('footer');
date.innerHTML = '<p> &copy; ' + 'Cherie Lampley ' + year + '</p>';

//create test copyright year
var today = new Date();
var year = today.getFullYear();

var date = document.getElementById('test-footer');
date.innerHTML = '<p> &copy; ' + 'TEST' + year + '</p>';

//video

var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'autohide': 1,
            'wmode': 'opaque',
            'showinfo': 0,
            'loop': 1,
            'mute': 1,
            //'start': 0,
            //'end': 110,
            'playlist': 'ruBeyKp_F5E'
        },
        videoId: 'ruBeyKp_F5E',
        events: {
            'onReady': onPlayerReady
        }
    });

}

function onPlayerReady(event) {
    event.target.mute();
    $('#text').fadeIn(400);
}

//pauses video
$(window).scroll(function() {
   var hT = $('.m-video').height(),
       wS = $(this).scrollTop();
   if (wS > hT) {
      player.pauseVideo();
   }
   else {
      player.playVideo();
   }
});