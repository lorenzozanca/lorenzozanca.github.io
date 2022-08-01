var introVideo = document.getElementById('intro');
const textV = document.getElementById("textVid");

function start(){
    introVideo.play();
    introVideo.muted;
}

// introVideo.addEventListener('play', (event) => {
//     setTimeout(() => {
//     textV.innerHTML = "We have a massively <br> growing global population";
//     }, "1000")
//     setTimeout(() => {
//     textV.innerHTML = "We don’t die from <br> a chronic illness anymore";
//     }, "4300")
//     setTimeout(() => {
//     textV.innerHTML = "now, <br> we live 20-30 years <br> with chronic illnesses";
//     }, "8600")
//     setTimeout(() => {
//     textV.innerHTML = "There is huge pressure on the healthcare systems around the world";
//     }, "12900")
//     setTimeout(() => {
//     textV.innerHTML = "WHO estimates a global shortage of 18 million health workers by 2030.";
//     }, "17200")
//     setTimeout(() => {
//     textV.innerHTML = "More than 50% of world’s population don’t have access to basic healthcare service";
//     }, "21500")
//     setTimeout(() => {
//     textV.innerHTML = "because it’s too expensive.";
//     }, "25800")
//     setTimeout(() => {
//     textV.innerHTML = "8 out of 10 deaths related to heart attacks could be prevented with timely intervention:";
//     }, "30100")
//     setTimeout(() => {
//     textV.innerHTML = "We go to the doctor <br> when it’s too late.";
//     }, "34400")
// });

introVideo.addEventListener('ended',myHandler,false);
function myHandler(e) {
    if(document.documentElement.scrollTop == 0){
        document.documentElement.scrollTop = document.documentElement.scrollTop + window.innerHeight;
    }
    start();
}

function playAudio(){
    introVideo.muted = !introVideo.muted;

}

gsap.registerPlugin(ScrollTrigger);

const bgVvideo = document.querySelector("#bgVideo");

bgVideo.pause();
bgVideo.currentTime = 0;

let sections = gsap.utils.toArray(".step");
sections.forEach((step, i) => {

    ScrollTrigger.create({
        trigger: step,
        start: "bottom bottom",
        end: "+=1000",
        pin: true,
        anticipatePin: 1,
    });

    gsap.fromTo(bgVideo, { currentTime: 3 * i }, {
        scrollTrigger: {
            trigger: step,
            scrub: 2,
            start: "top bottom",
            end: "bottom bottom",
        },
        currentTime: 3 * (i + 1),
        duration: 3,
        ease: "none",

    });

});