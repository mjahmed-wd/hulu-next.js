import Image from "next/image";
import React from "react";

const Thumbnail = ({ result }) => {
  const BASE_URL = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="group m-5 p-5 cursor-pointer transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-1">
      <Image
        alt=""
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1000}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h1 className="text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h1>

      </div>
    </div>
  );
};

export default Thumbnail;
