import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Title from './components/Title'

class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <div className="app">
          <Title />
      </div>
    )
  }
}

export default BooksApp
