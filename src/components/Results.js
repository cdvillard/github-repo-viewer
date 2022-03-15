import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router-dom";

const Results = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [hasError, setError] = useState(false);
  const [pagination, updatePagination] = useState("");
  const handleError = useErrorHandler();

  useEffect(() => {
    requestRepos();
  }, []);

  async function requestRepos() {
    setError(false);
    const user = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          'Authorization': 'token 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'
        }
      }
    ).then(
      (response) => {
        if (response.status === 404) {
          handleError(new Error('That user could not be found.'));
        }
        return response.json();
      }
    );

    setUser(user);

    if (Object.keys(user).length > 0) {
      const repos = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            'Authorization': 'token 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'
          }
        }
      ).then(
        (response) => {
          const pagination = response.headers.get('link');
          updatePagination(pagination);
          return response.json();
        }
      );

      setRepos(repos);
    }
  }

  return (
    <>
      {hasError && <p>Something went wrong</p>}
      {!hasError && <div>
      <h1>{user.name}</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            {repo.name}
          </li>
        ))}
      </ul>
      </div>}
    </>
  )
}

export default Results;