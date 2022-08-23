
import "../styles/movie.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Movie(props) {


  return (
    <div className="card">
      
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.genre} </Card.Text>
          <span>{props.rate}</span>

          <Button variant="outline-danger">
            watch
          </Button>
        </Card.Body>
        
      </Card>
      </div>
  )
}
