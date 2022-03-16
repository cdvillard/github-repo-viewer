import { useEffect, useState } from "react";

const Repo = ({ repo }) => {
  return (
    <div>
      <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
        <div className="repo">
          <strong className="name">{repo.name}</strong>
          <p className="description">{repo.description}</p>
          <div className="details">
            <span>⭐️ Stars: {repo.stargazers_count}</span>
            <span>👁 Watchers: {repo.watchers_count}</span>
            <span>Forks: {repo.forks_count}</span>
            <span>Language: {
              repo.language ?
                <span>{repo.language}</span> :
                <span className="tooltip" title="Because of Github's API and its rate limiting, we can't determine if this is a repo with multiple or no associated languages.">Unknown</span>
            }</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Repo;