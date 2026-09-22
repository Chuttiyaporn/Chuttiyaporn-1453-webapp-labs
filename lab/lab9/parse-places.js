async function loadPlaces() {
    try {
        const response = await fetch("places.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const placeList = document.querySelector("#place-list");

        for (const place of data.results) {
            const item = document.createElement("li");

            const name = document.createElement("div");
            name.textContent = `name = ${place.name}`;
            name.style.color = "blue";

            const location = document.createElement("div");
            location.textContent =
                `location = ${place.geometry.location.lat}, ${place.geometry.location.lng}`;
            location.style.color = "green";

            item.appendChild(name);
            item.appendChild(location);

            placeList.appendChild(item);
        }

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

loadPlaces();