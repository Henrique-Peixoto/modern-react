import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('New blog added!')
        setIsPending(false)
        setTitle('')
        setBody('')
        setAuthor('')
      })
    }, 500);
  }

  return (
    <div className="create">
      <h2>Add a new blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={ body }
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select
          value={ author }
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="" hidden>-- Select author --</option>
          <option value="Kant">Kant</option>
          <option value="Kierkegaard">Kierkegaard</option>
        </select>
        { !isPending && <button>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
