import { render } from "react-dom";
import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <h1>Something went wrong:</h1>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

function NotFound() {
  return (
    <div>404: page not found</div>
  )
}

const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <div>
            Hello HPE!
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Search />} />
              <Route path="/:username" element={<Results />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));