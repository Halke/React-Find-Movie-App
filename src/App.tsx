import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Tab from './components/Tab/Tab'
import {SearchContext, searchContextDefaultValue} from './components/context/SearchContext'
import useSearchContextValue from './components/context/useSearchContextValue'

import './App.css'

function App() {

  const searchContextValue = useSearchContextValue()

  return (
    <SearchContext.Provider value={searchContextValue}>
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Tab}/>
              <Route exact path="/movie/:movieId" />
              <Route exact path="/tv/:tvId" />
            </Switch>
        </div>
      </Router>
    </SearchContext.Provider>
  )
}

export default App
