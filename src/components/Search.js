// import { useEffect, useState } from "react";
import { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   requestRepos();
  // }, []);

  async function requestRepos() {
    try {
      const user = await fetch(`https://api.github.com/users/${username}`).then(
        (response) => {
          return response.json();
        }
      );

      const repos = await fetch(`https://api.github.com/users/${username}/repos`).then(
        (response) => {
          return response.json();
        }
      );

      console.log('completed requests', [user, repos]);
      setUser(user);
      setRepos(repos);
    } catch (error) {
      console.log("Error: ", error);

      throw (error);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        requestRepos();
      }}>
        <label htmlFor="user">
          Username
          <input id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search;