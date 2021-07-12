import React from 'react'
import { Link } from 'react-router-dom'


const BaseLayout = (props) => {
  return (
    <>
    {/* <ul>
        <li>
            <Link to="/">Home Page</Link>
        </li>
        <li><Link to="/findfruit">Find Fruit</Link></li>
        <li><Link to="/books">Books</Link></li>
    </ul> */}
      
      {props.children}
    </>
  )
}

export default BaseLayout
