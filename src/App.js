import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
       <Switch>
      	  <Route exact path="/" component={Guide} />
      	  <Route path="/search" component={Search} />
      	</Switch>
      </div>
    )
  }
}

export default BooksApp
