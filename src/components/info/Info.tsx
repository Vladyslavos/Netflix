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
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full  md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold ">
              Enjoy on your TV.
            </h1>
            <p className="text-xl  pt-5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="flex justify-center flex-row items-center self-center object-contain">
            <img
              src={NetflixTv}
              alt="netflix-gif"
              className="max-w-full h-[350px] justify-center flex-row items-center self-center object-contain"
            />
          </div>
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
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="image">
            <img
              src={NetflixDownload}
              alt="netflix-gif"
              className="h-[350px]"
            />
          </div>
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Download your shows to watch offline.
            </h1>
            <p className="text-xl  pt-5">
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
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Watch everywhere.
            </h1>
            <p className="text-xl  pt-5">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <div className="image">
            <img src={NetflixGadgets} alt="netflix-gif" className="h-[350px]" />
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
        <div className="flex flex-col justify-evenly items-center self-center md:flex-row md:items-center min-h-[460px] p-4 md:p-6">
          <div className="flex justify-center flex-row items-center self-center object-contain">
            <img
              src="https://occ-0-7319-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt="netflix-gif"
              className="h-[350px]"
            />
          </div>
          <div className="flex flex-col justify-center text-left items-center self-center text-white sm:mt-18 sm:w-full md:w-[480px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Download your shows to watch offline.
            </h1>
            <p className="text-xl  pt-5">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </motion.div>
      <hr />
      <Accordion />
      <Footer />
    </>
  );
}
