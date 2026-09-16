async function getGitHubUser() {
    try {
        const response = await fetch(
            "https://api.github.com/users/Chuttiyaporn"
        );

        if (!response.ok) {
            throw new Error(
                `GitHub API error with status ${response.status}`
            );
        }

        const data = await response.json();

        const githubName = document.getElementById("github-name");
        const githubAvatar = document.getElementById("github-avatar");

        githubName.textContent = data.name;
        githubName.href = data.html_url;

        githubAvatar.src = data.avatar_url;
        githubAvatar.alt = `${data.name}'s GitHub avatar`;

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

getGitHubUser();