import { Link } from "react-router-dom";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <h1>Something went wrong:</h1>
      <p style={{ color: 'red' }}>{error.message}</p>
      <a href="/">Click here to return to the homepage and try again.</a>
    </div>
  )
}

export default ErrorFallback;