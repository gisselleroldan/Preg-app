import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {ListGroup} from 'react-bootstrap'

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
      let works = book.key
      // get cover_img src and workSrc
      let coverImgSrc = `http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
      let worksSrc = `https://openlibrary.org${works}`
      book.cover_id = coverImgSrc
      book.key = worksSrc
      console.log(book)
    });
    console.log(bookData.works)
    setBooks(bookData.works)
    
   }

  return (
    <>
      {/* map through coverImg prop and make image links with the book covers */}

          {books && books.map((book) => {
              return <ListGroup horizontal>
                  <ListGroup.Item className="book"><a href={book.key}> {book.title}<br/>
                    <img style={{width: "150px"}} src={book.cover_id}alt="" />
                    </a></ListGroup.Item>
                  </ListGroup>
                
              

          })}
    
    </>
  )
}

export default Books
 