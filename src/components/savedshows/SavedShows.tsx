import React from "react";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { IItem } from "../../types/type";

export default function SavedShows() {
  const [movies, setMovies] = React.useState<IItem[]>([]);
  const { user }: any = UserAuth();

  const slideLeft = () => {
    var slider: HTMLElement | null = document.getElementById("slider");
    slider ? (slider.scrollLeft = slider.scrollLeft - 500) : null;
  };

  const slideRight = () => {
    var slider: HTMLElement | null = document.getElementById("slider");
    slider ? (slider.scrollLeft = slider.scrollLeft + 500) : null;
  };

  React.useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID: number) => {
    try {
      const result = movies.filter((item: IItem) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (e) {
      console.error("Error", e);
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={animation}
        viewport={{ once: true }}
      >
        <h2 className="text-white font-bold md:text-xl p-4">My Movies</h2>
        <div className="relative flex items-center group ">
          <MdChevronLeft
            size={40}
            className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            onClick={slideLeft}
          />
          <div
            id={"slider"}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies?.map(({ img, id, title }: IItem) => (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${img}`}
                  alt={title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {title}
                  </p>
                  <p
                    className="absolute text-gray-300 top-4 right-4"
                    onClick={() => {
                      deleteShow(id);
                    }}
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            size={40}
            className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            onClick={slideRight}
          />
        </div>
      </motion.div>
    </>
  );
}
