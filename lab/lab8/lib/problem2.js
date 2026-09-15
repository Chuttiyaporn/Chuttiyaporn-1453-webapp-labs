const planet = document.createElement("div");
planet.classList.add("planet");
planet.style.backgroundColor = "gray";
document.body.appendChild(planet);

const moon = document.createElement("div");
moon.classList.add("moon");
moon.style.backgroundColor = "yellow";
planet.appendChild(moon);

const text = document.createElement("div");
text.textContent = "The planet and the moon";
text.style.color = "white";
document.body.appendChild(text);