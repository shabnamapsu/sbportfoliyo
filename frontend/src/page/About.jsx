import React from "react";
import { useSelector } from "react-redux";
import Sectiontitle from "../component/Sectiontitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  const { portfolioData } = useSelector(
    (state) => state.root
  );

  const about = portfolioData?.about || {};

  const {
    skills = [],
    lottieurl,
    description1,
    description2,
  } = about;

  if (!about) {
    return (
      <div className="text-center text-white py-10">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Sectiontitle title="About Me" />

      <div className="py-10 flex flex-col md:flex-row items-center gap-10">
        
        {/* Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <DotLottieReact
            src={lottieurl}
            loop
            autoplay
            className="w-full max-w-md h-[400px]"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-300 leading-8">
            {description1}
          </p>

          <p className="text-gray-300 leading-8 mt-5">
            {description2}
          </p>

          
          
        </div>

      </div>
      <div className="mt-8">
            <h1 className="text-green-200 text-xl font-semibold mb-5">
              Technologies I Work With
            </h1>
             <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-green-200 px-5 py-2 rounded-lg hover:bg-green-200 hover:text-black transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
            
          </div>
    </>
  );
}

export default About;