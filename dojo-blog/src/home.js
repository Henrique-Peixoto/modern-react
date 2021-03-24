const Home = () => {

  const handleClick = (e) => {
    console.log('Hello, Ninjas!',e.target)
  }

  const handleClickAgain = (name, e) => {
    console.log('Hello, ' + name)
    console.log('Target: ', e.target)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={(e) => handleClickAgain('Manuel',e)}>Click me again!</button>
    </div>
  );
}
 
export default Home;