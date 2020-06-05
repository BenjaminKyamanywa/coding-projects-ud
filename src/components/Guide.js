import React from 'react'
import Title from './Title'
import BooksShelf from './BooksShelf'
import AddBook from './AddBook'

const Guide = () => {
	return(
    	<div className="main-page">
      		<Title />
      		<BooksShelf />
      		<AddBook />
      	</div>
    )
}

export default Guide