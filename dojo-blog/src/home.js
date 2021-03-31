import { useState, useEffect } from 'react'
import BlogList from './blogList'
 
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Luigi', id: 3 }
  ])

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  // This function is fired every time the DOM is rendered
  useEffect(() => {
    console.log('using useEffect hook')
    console.log(blogs)
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <BlogList 
        blogs={blogs.filter(blog => blog.author === 'Mario')} 
        title="Mario's blogs" 
        handleDelete={handleDelete}
      />
    </div>
  );
}
 
export default Home;