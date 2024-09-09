import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Omdb = () => {
  const [movieName, setmovieName] = useState("");
  const [movies, setmovies] = useState([]);
  const getMovieData = async () => {
    try {
      const url = "http://www.omdbapi.com/";
      const res = await axios.get(url, {
        params: {
          apikey: "add your key",
          s: movieName,
        },
      });
      console.log(res.data);
      setmovies(res.data.Search);
    } catch (err) {
      alert("movie not found");
    }
  };
  return (
    <div>
      <h1>Omdb</h1>
      <div>
        <input
          type="search"
          onChange={(e) => {
            setmovieName(e.target.value);
          }}
          placeholder="search movie"
        ></input>
      </div>
      <div>
        <button
          className="btn btn-info"
          onClick={() => {
            getMovieData();
          }}
        >
          Get Movie Data
        </button>
      </div>
      <div>
        <div className="container">
          <div className="row">
            {movies?.map((movie) => (
              <div className="col-md-2">
                <div className="card">
                  <Link to={`/omdb/${movie?.imdbID}`}><img src={movie.Poster} className="card-img-top" /></Link>
                  <div className="card-body">
                    <h5 className="card-title">{movie?.title}</h5>
                    <p className="card-text">{movie?.imdbID}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
