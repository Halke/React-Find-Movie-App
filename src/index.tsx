import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducer from './components/store/reducer'

const store: Store<SearchState, SearchAction> & {
  dispatch: DispatchType
} = createStore(reducer)  

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  rootElement
)
