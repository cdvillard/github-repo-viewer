import { render } from "react-dom";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      Hello HPE!
      <Search />
    </div>
  );
};

render(<App />, document.getElementById("root"));