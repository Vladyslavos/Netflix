import React from "react";
import axios from "axios";
import { IMovies } from "../../types/type";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";
import Movie from "../movie/Movie";

interface IProps {
  title: string;
  fetchURL: string;
  rowId: number;
}

export default function Row({ title, fetchURL, rowId }: IProps) {
  const [movies, setMovies] = React.useState<IMovies[]>([]);

  React.useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider: HTMLElement | null = document.getElementById("slider" + rowId);
    slider ? (slider.scrollLeft = slider.scrollLeft - 500) : null;
  };

  const slideRight = () => {
    var slider: HTMLElement | null = document.getElementById("slider" + rowId);
    slider ? (slider.scrollLeft = slider.scrollLeft + 500) : null;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      viewport={{ once: true }}
    >
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </motion.div>
  );
}
