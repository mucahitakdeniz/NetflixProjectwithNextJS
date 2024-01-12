import React from "react";

const MovieDetail = ({ params }) => {
  console.log(params);
  return <div>Movie id : {params.movieId}</div>;
};

export default MovieDetail;
