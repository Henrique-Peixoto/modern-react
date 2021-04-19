// With the Link tag, the page requests will be intercepted by the React
// and instead of retrieving html from the server, the html will be pro-
// vided by the React bundle, which speeds up the general usage from the page.
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>The Dojo Blog</h1>
      </Link>
      <div className="links">
        {/* The value of "to" is matched against the paths in our Router tags (App.js)
         If a value matches, the content inside the <Router>...</Router> is returned,
         that's why there is no need for requesting the page to the server.*/}
        <div className="navbar-button">
          <Link to="/">Home</Link>
          <Link to="/create" style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px'
          }}>New Blog</Link>
        </div> 
      </div>
    </nav>
  );
}
 
export default Navbar;
