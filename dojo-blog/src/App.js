import Navbar from './navbar'
import Home from './home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/**When the first route is matched, the matched route returns
           * If we don't use the Switch component, all the matched routes will be returned
           */}
          <Switch>
            {/**The "exact" attribute allows that only the exact path we want to be matched
             * notice that "/" matches with "/create", but with "exact", it doesn't happen anymore
            */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* ":id" indicates a dinamic value */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
