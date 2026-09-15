const catPic = document.querySelector("#cat-pic");
const mustachePic = document.querySelector("#mustache-pic");

catPic.addEventListener("click", function(event) {
    mustachePic.style.left = event.clientX - 50 + "px";
    mustachePic.style.top = event.clientY - 20 + "px";
});