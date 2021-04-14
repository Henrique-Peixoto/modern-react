import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  // This allows us to grab parameters from the URL
  // We want the ":id" in the route that leads to a blog
  const { id } = useParams()

  return (
    <div className="blog-detail">
      <h2>Blog Details - { id }</h2>
    </div>
  )
}

export default BlogDetails
