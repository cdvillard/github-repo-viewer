import { render } from "react-dom";
import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorFallback from "./components/ErrorFallback";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Search from "./components/Search";

const App = () => {

  return (
    <StrictMode>
      <BrowserRouter>
        <div>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/:username" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
          </div>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));