import Movie from "./movie";
import React, { useState } from "react";
import { useEffect } from "react";

export default function MovieList(props) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rate, setRate] = useState("");

  const [listfilm, setListfilm] = useState([""]);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "31d22a1a74mshced98b321ccbfb9p170badjsnf821ac5cc879",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%of%thr",
      options
    )
      .then((response) => response.json())
     
      .then((response) => {
        setListfilm(response.d);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <div>
      {listfilm.map((movie, index) => {
        return <Movie key={index} img={movie.imageUrl} genre={movie.l} title={movie.q} />;
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
