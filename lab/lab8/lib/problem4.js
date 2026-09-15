const catEl = document.querySelector("#cat");

// The image above is the WALKING cat. When the cat stops, switch to a STATIC cat.
const staticCatSrc =
"https://www.kasandbox.org/programming-images/animals/cat.png";

const speed = 200; // pixels per second (you may tune this)

const startWalk = () => {
let startTime = null;

const walkTheCat = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const secondsElapsed = (timestamp - startTime) / 1000;
    const distance = secondsElapsed * speed;
    catEl.style.transform = `translateX(${distance}px)`;
    const stopDistance = window.innerWidth - catEl.offsetWidth;
    if (distance >= stopDistance) {
        catEl.style.transform = `translateX(${stopDistance}px)`;

        const catWidth = catEl.offsetWidth;
        catEl.src = staticCatSrc;
        catEl.style.width = catWidth + "px";

        return;
    }

    // TODO 1: Compute how far the cat should have moved (use secondsElapsed
    //         and speed) and apply it with transform: translateX(...)

    // TODO 2: Compute the stopping distance from window.innerWidth, minus the
    //         cat's own width, so the cat rests flush at the RIGHT EDGE.
    //         Do NOT hardcode a pixel value. When the cat reaches it, clamp
    //         to the edge and STOP (do not request another frame).

    // TODO 3: When the cat stops, swap catEl.src to the static cat image.

    // TODO 4: Keep the SAME width after the swap so the image does not jump.

    // Keep the animation running while the cat is still walking:
    requestAnimationFrame(walkTheCat);
};

requestAnimationFrame(walkTheCat);
};

// Start after load so the cat image's size (offsetWidth) is available.
window.addEventListener("load", startWalk);