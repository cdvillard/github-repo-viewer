function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <h1>Something went wrong:</h1>
      <p style={{ color: 'red' }}>{error.message}</p>
    </div>
  )
}

export default ErrorFallback;