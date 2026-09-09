const imagesEls = document.querySelector("img");
imagesEls.src = "https://www.en.kku.ac.th/web/wp-content/uploads/2018/06/DSC_0476%E0%B9%81%E0%B8%81%E0%B9%89900.jpg" ;
const imagesLink = document.createElement("a");
imagesLink.href = "https://www.en.kku.ac.th";
imagesEls.parentNode.insertBefore(imagesLink, imagesEls);
imagesLink.appendChild(imagesEls);

const newParagraph = document.createElement("p");
newParagraph.textContent = "We hope you enjoy learning";
newParagraph.style.color = "white";
newParagraph.style.backgroundColor = "black";
newParagraph.style.fontSize = "2rem";
newParagraph.style.textAlign = "center";

const section = document.querySelector("section");
const oldParagraph = document.querySelector("p");
section.removeChild(oldParagraph);
section.appendChild(newParagraph);
document.title = "KKU Engineering";