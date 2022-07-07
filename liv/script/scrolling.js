var prevScrollpos = window.pageYOffset;

const scrollingvideo = document.getElementById("background-container");

const compa = document.getElementById("comparison");
var compaY = compa.getBoundingClientRect();

const devi = document.getElementById("devices");
const bra = document.getElementById("brain");

const every = document.getElementById("everything");
var everyY = every.getBoundingClientRect();

const fixel1 = document.getElementById("fix1");
const fixel2 = document.getElementById("fix2");
const bgbg = document.getElementById("bgsvg");
const ss1 = document.getElementById("sig1");
const ss2 = document.getElementById("sig2");
const ss3 = document.getElementById("sig3");

function menu() {

    // menu scroll 
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;

    let level = document.documentElement.scrollTop;

    //other scroll
    if (level > compaY.bottom) {
        scrollingvideo.style.display = "none";

        var lineY = document.getElementById("lineSection").getBoundingClientRect();

        if (0 > lineY.top){
            devi.style.display = "block";
            if ((-0.3 * window.innerHeight) > lineY.top) {
                document.getElementById("lines").style.display = "block";
                if ((-1.2 * window.innerHeight) > lineY.top) {
                    bra.style.display = "block";
                    if ((-1.6 * window.innerHeight) > lineY.top) {
                        bra.style.width = "25%";
                        bra.style.left = "37.5vw";
                    }
                }
            }
        }       

        var everyY = every.getBoundingClientRect();

        if (everyY.bottom > window.innerHeight && 0 > everyY.top) {
            // during the section
            fixel1.style.position = "fixed";
            fixel2.style.position = "fixed";
            bgbg.style.position = "fixed";
            bgbg.style.top = "0vh";
            fixel1.style.top = "40vh";
            fixel2.style.top = "40vh";
            fixel2.style.right = "4vw";
            if ((-0.3 * window.innerHeight) > everyY.top){
                ss1.style.display = "block";
                if ((-0.6 * window.innerHeight) > everyY.top) {
                    ss2.style.display = "block";
                    if ((-0.9 * window.innerHeight) > everyY.top) {
                        ss3.style.display = "block";
                    }
                }
            }
        } else {
            fixel1.style.position = "absolute";
            fixel2.style.position = "absolute";
            bgbg.style.position = "absolute";

            ss1.style.display = "none";
            ss2.style.display = "none";
            ss3.style.display = "none";
            if(everyY.bottom < window.innerHeight){
                //after the section
                bgbg.style.top = "100vh";
                fixel1.style.top = "140vh";
                fixel2.style.top = "140vh";
                fixel2.style.right = "8vw";

                ss1.style.display = "block";
                ss2.style.display = "block";
                ss3.style.display = "block";
            }
        }

    } else {
        scrollingvideo.style.display = "flex";
    }
}
    
    window.addEventListener("scroll", menu);


// console.log((everyY.bottom/innerHeight).toFixed(2), (level/window.innerHeight).toFixed(2), (everyY.top/innerHeight).toFixed(2));
// console.log(everyY.top, everyY.bottom);