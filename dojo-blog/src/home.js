import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('Durval')
  const [age, setAge] = useState(29)

  const handleClick = (e) => {
    setName('Mirosmar')
    setAge(35)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
 
export default Home;