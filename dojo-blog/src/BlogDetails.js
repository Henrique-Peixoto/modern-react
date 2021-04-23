import { useParams } from 'react-router-dom'
import useFecth from './useFetch'

const BlogDetails = () => {
  // This allows us to grab parameters from the URL
  // We want the ":id" in the route that leads to a blog
  const { id } = useParams()
  const { data:blog, error, isPending} = useFecth(`http://localhost:8000/blogs/${id}`)

  return (
    <div className="blog-detail">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article className="blog-content">
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
