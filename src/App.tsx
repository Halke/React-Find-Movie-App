import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Tab from './components/Tab/Tab'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Tab}/>
            <Route exact path="/movie/:movieId" />
            <Route exact path="/tv/:tvId" />
          </Switch>
      </div>
    </Router>
  )
}

export default App
