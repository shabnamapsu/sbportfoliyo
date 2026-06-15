import React from "react";
import { useSelector } from "react-redux";
import developer from "../assets/developer.svg";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);

  const intro = portfolioData?.intro || {};

  const {
    firstName,
    lastName,
    welcometext,
    description,
    caption,
  } = intro;

  return (
    <div className="bg-black min-h-screen text-white flex flex-col md:flex-row items-center py-7">
      <div className="md:w-1/2 flex flex-col justify-center py-6 px-5 gap-6">
        <h1 className="text-sm text-green-200">
          {welcometext}
        </h1>

        <h1 className="text-orange-200 text-5xl font-bold">
          {firstName} {lastName}
        </h1>

        <h2 className="text-3xl font-semibold">
          {caption}
        </h2>

        <p className="leading-8 text-gray-300">
          {description}
        </p>

        <button className="w-fit border-2 border-green-200 px-6 py-3 rounded-lg hover:bg-green-200 hover:text-black transition-all duration-300">
          Get Started
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={developer}
          alt="Developer"
          className="w-72 md:w-[450px] object-contain"
        />
      </div>
    </div>
  );
}

export default Intro;