// Use "npx json-server --watch data/db.json --port 8000", to set a json server

import { useState, useEffect } from 'react'
import BlogList from './blogList'
 
const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  // This function is fired every time the DOM is rendered.
  // To prevent this behavior, we can add a "dependecies array".
  // It can be an empty array or we can add real dependencies.
  // The only dependencie we gonna have is "name".
  useEffect(() => {
    setTimeout(() => {
      // Fetching the data from the JSON server
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
        setIsPending(false)
      })
    }, 1000)
  },[])

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {/*If blogs evaluate to false, nothing is outputed on the screen, because the right
      side of && operator is not evaluated.
      If blogs evaluate to true, then the right side of the && operator is evaluated and
      then the BlogList is rendered on the screen.*/}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}
 
export default Home;