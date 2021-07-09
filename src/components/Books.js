import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

// This component will render pregnancy nutrition books


const Books = () => {

    const [books, setBooks] = useState([])
    const weeklyData = useSelector(state => state.weeklyData)
    useEffect(() => {
        fetchBooks()
        console.log(weeklyData)
    }, [])

   const fetchBooks = async () => {
    let url = `https://openlibrary.org/subjects/nutritional_aspects_of_pregnancy.json`
    let results = await fetch(url);
    let bookData = await results.json()

    // loop through bookData array and get change cover_id from just a # 
    // link to cover
    bookData.works.forEach((book) => {  
      let cover_id = book.cover_id
      // get cover_img src
      let coverImgSrc = `http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
      book.cover_id = coverImgSrc
      // console.log(book)
    });
    console.log(bookData.works)
    setBooks(bookData.works)
    
   }

  return (
    <>
      Some pregnancy nutrition book options
      {/* map through coverImg prop and make image links with the book covers */}

      <ul>
          {books && books.map((book) => {
              return <li>
                  <a href="/"> {book.title}<br/>
                  <img src={book.cover_id}alt="" />
                  </a></li>

          })}
      </ul>
    </>
  )
}

export default Books
 