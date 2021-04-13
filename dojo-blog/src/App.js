import Navbar from './navbar'
import Home from './home'
import Create from './Create'
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
