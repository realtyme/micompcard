

// April 14m, 2024
// Day two of working on the website for model comp card.



var about_me_btn = document.getElementById('about-me-video')
about_me_btn.addEventListener('click', function(e){
    videoSrc = about_me_btn.getAttribute('data-bs-src')
})

// Finally! Get the link. Autoplay isn't working for all devices
var videoModal = document.getElementById('modal-youtube-videos')
var video = document.getElementById('video')
var videoSrc

basePath = "https://www.youtube.com/embed/"
extension = "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
videoModal.addEventListener('shown.bs.modal',(e)=>{
    youTubeUrl =  basePath.concat(videoSrc, extension)
    video.setAttribute('src', youTubeUrl)
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', "")
})

// Close the video if the user clicks outside!
window.onclick = function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
}