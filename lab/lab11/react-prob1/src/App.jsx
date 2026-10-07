import './App.css';

function GitHubAvatar() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/189576690?v=4"
      alt="GitHub Avatar"
    />
  );
}

function GitHubRepoURL() {
  return (
    <a
      href="https://github.com/Chuttiyaporn"
      target="_blank"
      rel="noopener noreferrer"
    >
      My GitHub repository
    </a>
  );
}

function GitHubInfo() {
  return (
    <div className="github-info">
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
}

export default GitHubInfo;