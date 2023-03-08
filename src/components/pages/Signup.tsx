import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { user, signUp }: any = UserAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      signUp({ email: email, password: password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/e344a6cb-13be-47fd-81e2-a9ee63826d08/UA-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background-image"
        className="hidden sm:block absolute w-full h-full object-cover"
      />
      <div className="w-full h-full bg-black/60 fixed top-0 left-0"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                type={"email"}
                placeholder={"Email or phone number"}
                className={"p-3 my-2 bg-gray-700 rounded"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type={"password"}
                placeholder={"Password"}
                className={"p-3 my-2 bg-gray-700 rounded"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-red-600 my-4 py-3 font-bold">
                Sign Up
              </button>
              <div className="flex justify-between text-sm text-gray-500">
                <p>
                  <input type={"checkbox"} className="mr-2" />
                  Remember me
                </p>
                <p>Need help ?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>
                <Link to={"/login"} className={"mx-2"}>
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
