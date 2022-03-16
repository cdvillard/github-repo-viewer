import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div className="search">
      <h1 className="intro-header">Github Repo Viewer</h1>

      <p className="intro">Please enter a Github username to see their repos.</p>
      <form
        className="user-input"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/${username}`);
        }}
      >
        <label htmlFor="user">
          <input id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Search;