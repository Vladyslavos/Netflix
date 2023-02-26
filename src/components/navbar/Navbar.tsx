import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-transparent border-2 border-red-600">
          Sign Up
        </button>
      </div>
    </div>
  );
}
