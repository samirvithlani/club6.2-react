import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export const OmdbMovieDetail = () => {
  const imdbID = useParams().id;
  const getMovieDetail = async () => {
    const url = "http://www.omdbapi.com/";
    const res = await axios.get(url, {
      params: {
        apikey: "add your key",
        i: imdbID,
      },
    });
    console.log(res.data);
  };
  return <div>
    <h1>Omdb Movie Detail</h1>
    <button className="btn btn-info" onClick={getMovieDetail}>Get Movie Detail</button>
  </div>;
};
