import { getMovieDetail, getVideoKey } from "@/helpers/movieFunctions";
import React from "react";
import VideoSection from "../components/VideoSection";
import Link from "next/link";
import { BackspaceIcon } from "@heroicons/react/24/solid";

const MovieDetail = async ({ params: { movieId } }) => {
  const movieDetails = await getMovieDetail(movieId);
  const videoKey = await getVideoKey(movieId);
  console.log(movieId);
  const { title } = movieDetails;
  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-center text-white text-3xl">{title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex items-center mt-3 md:mt-4 gap-3">
        <Link
          hr ef={"/movies"}
          className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition mt-2"
        >
          <BackspaceIcon className="w-4 md:w-7 text-black mr-1" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
