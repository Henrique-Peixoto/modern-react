import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false)
  const [isAuthorEmpty, setIsAuthorEmpty] = useState(false)
  // The "history" represents the page history from the tab we are using
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const blog = { title, body, author }

    if(author !== ''){
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
          // We are going one page back in the page history
          // history.go(-1)
          // Specifying the page we wanna go after the POST gets done
          history.push("/")
        })
      }, 500);
    }
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
          onChange={(e) => {
              setAuthor(e.target.value)
              setIsAuthorEmpty(false)
            }
          }
        >
          <option value="" hidden>-- Select author --</option>
          <option value="Kant">Kant</option>
          <option value="Kierkegaard">Kierkegaard</option>
        </select>
        { isAuthorEmpty && <p>Please, select an author.</p> }
        { !isPending && <button onClick={() => {if(author === '') setIsAuthorEmpty(true)}}>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
