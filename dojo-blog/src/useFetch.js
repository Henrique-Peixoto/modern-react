import { useState, useEffect } from 'react'

// Hooks in React must start with "use"
const useFetch = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  // This function is fired every time the DOM is rendered.
  // To prevent this behavior, we can add a "dependecies array".
  // It can be an empty array or we can add real dependencies.
  // The only dependencie we gonna have is "name".
  useEffect(() => {
    setTimeout(() => {
      // Fetching the data from the JSON server
      fetch(url)
      .then(res => {
        // This sets the "message" propertie that will be catched by the error (if it happens).
        if(!res.ok) throw Error('Could not fetch the data for that resource!')
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setIsPending(false)
      })
    }, 1000)
  }, [url])

  // The returning values from useFetch
  return { data, isPending, error }
}

export default useFetch
