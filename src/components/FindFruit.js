import {Form, Button} from 'react-bootstrap'
import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'


// This component will calculate due date and render weeklyData info

const FindFruit = ({data}) => {

  const [dateValue, setDateValue] = useState('')
  const [weeksAlong, setweeksAlong] = useState(null)


  const handleForm = (e) => {
      e.preventDefault();
      const dueDateEntered = dateValue

      // calculating due date
      let today = new Date(); 
      let dueDate = new Date(dueDateEntered);
      let difference= Math.abs(dueDate - today);
      let days = difference/(1000 * 3600 * 24)
      let pregWeeks = (days-280)/ 7
      let result = Math.round(Math.abs(pregWeeks))

      setweeksAlong(result)
  }


  return (
    <>
      {/* Add form date validation later if time allows */}

      {(weeksAlong && data) && <Container>
                                <Row className="justify-content-center" >
                                    <Col xs={6} md={4}>
                                        <Image style={{width: "100px"}}src={data[data.findIndex(item => item.week === parseInt(weeksAlong))].imgURL} roundedCircle />
                                    </Col>
                                </Row>
                              </Container>}

      <Form onSubmit={handleForm}>
        <Form.Group controlId="dueDate">
          <Form.Label>Enter your Due Date</Form.Label>
          <Form.Control type="text" placeholder="MM/DD/YYYY" value={dateValue} onChange={(e)=>{setDateValue(e.target.value)}} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> <br/>

      {/* Displaying due date and fruit size

        get week from dueDate calculator
        if that week matches a week in data.week, show that week and fruit
        <img src={data[0].imgURL} alt="" />
      */}
      {weeksAlong && `You are ${weeksAlong} weeks along!`} <br/>
      {(weeksAlong && data) && `Baby size: ${data[data.findIndex(item => item.week === parseInt(weeksAlong))].fruit}!` } <br/>




    </>
  )
}

export default FindFruit


