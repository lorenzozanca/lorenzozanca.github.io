
    var description = document.getElementById("description");

    function narration() {

    var section1 = document.getElementById("section1").getBoundingClientRect();

        if (0 > section1.top) {
            description.innerHTML = "Imagine a future where your digital footprint wherever you are is turned into health data";
            description.style.opacity = "1";

            var section2 = document.getElementById("section2").getBoundingClientRect();
            if (0 > section2.top) {
                description.style.opacity = "0";

                var section3 = document.getElementById("section3").getBoundingClientRect();
                if (0 > section3.top) {
                    description.innerHTML = "Imagine, if we could used it proactively for preventive healthcare";
                    description.style.opacity = "1";

                    var section4 = document.getElementById("section4").getBoundingClientRect();
                    if (0 > section4.top) {
                        description.style.opacity = "0";

                        var section5 = document.getElementById("section5").getBoundingClientRect();
                        if (0 > section5.top) {
                            description.innerHTML = "Imagine if we could analyze the entire body";
                            description.style.opacity = "1";

                            var section6 = document.getElementById("section6").getBoundingClientRect();
                            if (0 > section6.top) {
                                description.innerHTML = "";
                                description.style.opacity = "0";
                            }
                        }
                    }
                }
            }

        } else {
            description.style.opacity = "0";
        }
    }

    window.addEventListener("scroll", narration);