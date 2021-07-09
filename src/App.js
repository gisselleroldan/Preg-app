import React, { Component } from 'react'
import FindFruit from './components/FindFruit'
import weeklyData from './data/weeklyData'
import { connect } from 'react-redux'
import loadData from './actions/load'

export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      weeklyData: weeklyData,
      books: []
    }
  }

  componentDidMount = async() => {
    this.props.loadData(this.state.weeklyData)
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

    this.setState({
      books: bookData.works,
    }, ()=> {
      // console.log(this.state.books)
      // console.log(this.state.coverImg)
    })
    
  }
  

  render() {


    return (
      <div>
        <FindFruit data={this.state.weeklyData}/> <br/> <br/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     loadData: (data)=>dispatch(loadData(data))
   }
}

export default connect(null, mapDispatchToProps)(App)


