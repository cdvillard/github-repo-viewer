import Repo from "./Repo"

const Repos = ({ repos }) => {
  console.log('repos', repos);
  return (
    <section className="repos">
      {repos.length === 0 && <p>This user has no repos.</p>}
      {repos.length > 0 && repos.map((repo, index) => (
        <Repo repo={repo} key={index} />
        ))}
    </section>
  );
}

export default Repos