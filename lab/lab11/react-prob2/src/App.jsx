import { GitHubAvatar, GitHubRepoURL } from './GitHubComponents.jsx';
import './App.css';

export default function App() {
  const userInfo = {
    url: 'https://github.com/Chuttiyaporn',
    imgURL: 'https://avatars.githubusercontent.com/u/189576690?v=4',
    alt: 'Chuttiyaporn Pakdeeyut'
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar
        imgURL={userInfo.imgURL}
        alt={userInfo.alt}
        size={200}
      />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}