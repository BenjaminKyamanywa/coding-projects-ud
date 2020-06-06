import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Guide from './components/Guide'
import Search from './components/Search'

class BooksApp extends Component {

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
