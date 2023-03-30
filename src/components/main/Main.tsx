import { HideImage } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import requests from "../../requests/Requests";
import { IData, IResult } from "../../types/type";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";

export default function Main() {
  const [movies, setMovies] = React.useState<IResult[]>([]);
  const movie: IResult = movies[Math.floor(Math.random() * movies.length)];

  React.useEffect(() => {
    try {
      axios.get(requests.requestPopular).then((res) => {
        setMovies(res.data.results);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }, []);

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <motion.div
      className="w-full h-[600px] text-white"
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      viewport={{ once: true }}
    >
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="w-full absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 ">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released:{movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
