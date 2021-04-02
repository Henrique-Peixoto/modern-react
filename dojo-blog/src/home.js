// Use "npx json-server --watch data/db.json --port 8000", to set a json server

import { useState, useEffect } from 'react'
import BlogList from './blogList'
 
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Luigi', id: 3 }
  ])

  const [name, setName] = useState('mario')

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  // This function is fired every time the DOM is rendered.
  // To prevent this behavior, we can add a "dependecies array".
  // It can be an empty array or we can add real dependencies.
  // The only dependencie we gonna have is "name".
  useEffect(() => {
    console.log('using useEffect hook')
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}>Change name!</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;