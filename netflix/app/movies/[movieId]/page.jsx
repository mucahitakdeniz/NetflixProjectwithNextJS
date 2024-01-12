import React from "react";

const MovieDetail = ({ params }) => {
  console.log(params);
  return <div>{params.movieId}</div>;
};

export default MovieDetail;
