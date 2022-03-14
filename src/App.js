import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div>
          Hello HPE!
          <Routes>
            <Route path="/:username" element={<Results />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));