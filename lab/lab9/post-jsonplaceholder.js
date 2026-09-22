async function createPost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: 1,
                    title: "Fix my bugs",
                    completed: false
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const result = document.querySelector("#result");
        result.textContent = JSON.stringify(data);

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

createPost();