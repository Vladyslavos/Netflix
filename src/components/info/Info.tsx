import React from "react";
import Accordion from "./Accordion";

export default function Info() {
  return (
    <>
      <div>
        <hr />
        <div className="flex flex-col lg:flex-row p-2 md:p-4">
          <div className="text-white sm:mt-10 sm:w-[300px] md:w-[450px] m-auto">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Enjoy on your TV.
            </h1>
            <p className="text-2xl  pt-5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <img
            src="https://netflix-images.manikantp.repl.co/Netflix1.gif"
            alt="netflix-gif"
            className="h-[350px]"
          />
        </div>
      </div>

      <div>
        <hr />
        <div className="flex flex-col lg:flex-row 0-2 md:p-4">
          <img
            src="https://netflix-images.manikantp.repl.co/Netflix2.gif"
            alt="netflix-gif"
            className="h-[350px]"
          />
          <div className="sm:mt-10 sm:w-[300px] md:w-[450px] m-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Download your shows to watch offline.
            </h1>
            <p className="text-white text-2xl  pt-5">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <div className="flex flex-col lg:flex-row p-2 md:p-4">
          <div className="text-white sm:mt-10 sm:w-[300px] md:w-[450px] m-auto">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Watch everywhere.
            </h1>
            <p className="text-2xl  pt-5">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
          <img
            src="https://netflix-images.manikantp.repl.co/Netflix3.gif"
            alt="netflix-gif"
            className="h-[350px]"
          />
        </div>
      </div>

      <div>
        <hr />
        <div className="flex flex-col lg:flex-row 0-2 md:p-4">
          <img
            src="https://occ-0-7319-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            alt="netflix-img"
            className="h-[350px]"
          />
          <div className="sm:mt-18 sm:w-[300px] md:w-[450px] m-auto">
            <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-left">
              Create profiles for kids.
            </h1>
            <p className="text-white text-2xl  pt-5">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
        <Accordion />
      </div>
    </>
  );
}
