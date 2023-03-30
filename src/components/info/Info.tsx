import React from "react";
import Accordion from "./Accordion";
import NetflixTv from "../../assets/Netflix1.gif";
import NetflixDownload from "../../assets/Netflix2.gif";
import NetflixGadgets from "../../assets/Netflix3.gif";
import Footer from "../footer/Footer";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";
export default function Info() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={2}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col lg:flex-row p-2 md:p-4 items-center">
          <div className="text-white sm:mt-10 sm:w-full md:w-[480px] m-auto">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Enjoy on your TV.
            </h1>
            <p className="text-2xl  pt-5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <img src={NetflixTv} alt="netflix-gif" className="h-[350px]" />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={3}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col lg:flex-row 0-2 md:p-4 items-center">
          <img src={NetflixDownload} alt="netflix-gif" className="h-[350px]" />
          <div className="sm:mt-10 sm:w-full md:w-[480px] m-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Download your shows to watch offline.
            </h1>
            <p className="text-white text-2xl  pt-5">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={4}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col lg:flex-row p-2 md:p-4 items-center">
          <div className="text-white sm:mt-10 sm:w-full md:w-[480px] m-auto">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Watch everywhere.
            </h1>
            <p className="text-2xl  pt-5">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <img src={NetflixGadgets} alt="netflix-gif" className="h-[350px]" />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={4}
        variants={animation}
        viewport={{ once: true }}
      >
        <hr />
        <div className="flex flex-col lg:flex-row 0-2 md:p-4">
          <img
            src="https://occ-0-7319-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            alt="netflix-img"
            className="h-[350px]"
          />
          <div className="sm:mt-18 sm:w-full md:w-[480px] m-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Create profiles for kids.
            </h1>
            <p className="text-white text-2xl  pt-5">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </motion.div>
      <Accordion />
      <Footer />
    </>
  );
}
