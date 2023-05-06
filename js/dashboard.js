let play = true

function toogleVideo(e) {
    let video = e.parentNode.parentNode.children[0]
    if(video.paused) video.play()
    else video.pause()

    
    e.children[0].src = play ? '/assets/playButton.png' : '/assets/pauseButton.png'
    play = !play
}