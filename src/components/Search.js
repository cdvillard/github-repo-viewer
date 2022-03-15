import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ error }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      {error ? <p>{error}</p> : ''}
      <form onSubmit={(e) => {
        e.preventDefault();
        navigate(`/${username}`);
      }}>
        <label htmlFor="user">
          Username
          <input id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Search;