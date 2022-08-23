import Movie from "./movie";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function MovieList(props) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rate, setRate] = useState("");

  const [listfilm, setListfilm] = useState([]);
  const [error, setError] = useState();


////////////////////////methode axios with asychn and awaite///////////////////////////
 


  const getMovieRequest = async () => {
    const url = "http://omdbapi.com/?s=marvel&apikey=339b64b7";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setListfilm(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


// methode axios///////////////////////////////////////////////////////////
  // const options = {
  //   method: "GET",
  //   url: "https://online-movie-database.p.rapidapi.com/auto-complete",
  //   params: { q: "game of thr" },
  //   headers: {
  //     "X-RapidAPI-Key": "5ec832a2a2msh7e771a1a6dd532ep11a190jsn95e8519948bb",
  //     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //   },
  // };
  // useEffect(() => {
  //   axios.request(options)
  //       .then(function (response) {
  //       setListfilm(response.data.d);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);
 //methode fetch//////////////////////////////////////////////////////////
  //useEffect(() => {
   
    // fetch(
    //   "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%of%thr",
    //   options
    // )
    //   .then((response) => response.json())
   
    //   .then((response) => {
    //     setListfilm(response.d);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
   
  return (
    <div>
      {/* {listfilm.map((movie, index) => {
        return (
          <Movie
            key={index}
            img={movie.i && movie.i.imageUrl}
            genre={movie.l}
            title={movie.q}
          />
        );
      })} */}

    {listfilm.map((movie,index)=>{
      return(
        <div>


     <Container>
      
      <Row>
        <Col> <Movie
        key={index}
         img={movie.Poster}
         title={movie.Type}
          genre={movie.Year}
        /></Col>
        
      </Row>
    </Container>

        </div>
        
      )
    })}

      {/* <Movie
          img={
            "https://wallpaper.dog/large/10915475.jpg"
          }
          title={"AQUAMAN"}
          genre={"Adventure"}
          rate={"5.0"}
          
          
/> */}
    </div>
  );
}
