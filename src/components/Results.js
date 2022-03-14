import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Results = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [pagination, updatePagination] = useState("");

  useEffect(() => {
    requestRepos();
  }, []);

  async function requestRepos() {
    try {
      const user = await fetch(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            'Authorization': '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'
          }
        }
      ).then(
        (response) => {
          return response.json();
        }
      );

      const repos = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            'Authorization': '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'
          }
        }
      ).then(
        (response) => {
          const pagination = response.headers.get('link');
          updatePagination(pagination);
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
      <h1>{user.name}</h1>
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

export default Results;