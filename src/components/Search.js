// import { useEffect, useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div>
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