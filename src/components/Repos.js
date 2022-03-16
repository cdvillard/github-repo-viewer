
const Repos = ({ repos }) => {
  return (
    <div>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repos