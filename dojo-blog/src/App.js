import './App.css';

function App() {
  const title = 'Welcome to the Dojo Blog!'
  const liked = 50
  const link = "http://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { liked } times</p>
        <p>{ 10 }</p>
        <p>{ "Hi you guys doing?" }</p>
        <p>{ [1,"potato",2,"apple"] }</p>
        <p>{ Math.random() }</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
