import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams } from "react-router-dom";
import Repos from "./Repos";
import User from "./User";

const Profile = () => {
  const authToken = process.env.GITHUB_AUTH_TOKEN;
  const apiEndpoint = process.env.GITHUB_API_ENDPOINT;
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [repoUrl, setRepoUrl] = useState(`https://api.github.com/users/${username}/repos`)
  const handleError = useErrorHandler();

  useEffect(() => {
    sendInitialRequestForUserAndRepos();
  }, []);

  async function sendInitialRequestForUserAndRepos() {
    const user = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          'Authorization': `token ${authToken}`
        }
      }
    ).then(
      (response) => {
        /*
          A 404 response means Github could not find anyone matching that username.
          So, we `handleError` and return an empty object.
        */
        if (response.status === 404) {
          handleError(new Error('That user could not be found.'));
          return {};
        }
        return response.json();
      }
    );

    setUser(user);

    /*
      If we don't receive a user back, we shouldn't run a second API call for no reason.
      Otherwise, let's find out what they've been working on.
    */
    if (Object.keys(user).length > 0) {
      await requestRepos();
    }
  }

  async function requestRepos() {
    const repos = await fetch(
      repoUrl,
      {
        headers: {
          'Authorization': `token ${authToken}`
        }
      }
    ).then(
      (response) => {
        let url = "";

        const pagination = response.headers.get('link');

        if (!pagination) {
          url = "";
          setRepoUrl(url);

          return response.json();
        }

        const pages = pagination.split(',');
        const next = pages.filter(page => page.includes("rel=\"next\""))[0];

        if (next) {
          const leftAngleBracket = next.indexOf('<');
          const rightAngleBracket = next.indexOf('>');
          url = next.substring(leftAngleBracket + 1, rightAngleBracket);
        }

        setRepoUrl(url);

        return response.json();
      }
    );

    setRepos(previousRepoList => [...previousRepoList, ...repos]);
  }

  return (
    <div>
      <User user={user} />
      <Repos repos={repos} />
      {repoUrl !== "" && <button onClick={requestRepos}>Load More</button>}
    </div>
  )
}

export default Profile;