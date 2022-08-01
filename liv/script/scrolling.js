const scrollingvideo = document.getElementById("background-container");
var compaY = document.getElementById("comparison").getBoundingClientRect();

function body() {

    let level = document.documentElement.scrollTop;

    if (level > compaY.bottom) {
        scrollingvideo.style.display = "none";
    } else {
        scrollingvideo.style.display = "flex";
    }
}
    
window.addEventListener("scroll", body);