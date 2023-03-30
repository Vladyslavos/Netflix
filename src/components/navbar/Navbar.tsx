import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logOut }: any = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <motion.nav
      className="flex items-center justify-between p-4 z-[100] w-full absolute"
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      viewport={{ once: true }}
    >
      <Link to={"/"}>
        <img
          src="https://i.ibb.co/r5krrdz/logo.png"
          className="cursor-pointer w-[140px]"
        />
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-transparent border-2 border-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-transparent border-2 border-red-600">
              SignUp
            </button>
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
