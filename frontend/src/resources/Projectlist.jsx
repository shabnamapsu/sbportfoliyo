import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sectiontitle from "../component/Sectiontitle";

function Projectlist() {
  const [selectedProject, setSelectedProject] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  const projects = portfolioData?.projects || [];

  if (projects.length === 0) {
    return (
      <div className="text-center text-white py-10">
        Loading Projects...
      </div>
    );
  }

  return (
    <>
      <Sectiontitle title="Projects" />

      <div className="py-10 flex flex-col lg:flex-row gap-10">

        {/* Left Side */}
        <div className="lg:w-1/4 flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project._id || index}
              onClick={() => setSelectedProject(index)}
              className={`cursor-pointer px-5 py-4 border-l-4 transition-all duration-300 ${
                selectedProject === index
                  ? "border-orange-300 bg-slate-900 text-orange-300"
                  : "border-green-200 text-green-200"
              }`}
            >
              {project.name}
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="lg:w-2/4 flex justify-center items-center bg-slate-900 rounded-xl p-5">
          <img
            src={projects[selectedProject]?.image}
            alt={projects[selectedProject]?.name}
            className="w-full max-w-md h-[300px] object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl font-bold text-orange-300">
            {projects[selectedProject]?.name}
          </h1>

          <h2 className="text-lg text-green-200 mt-3">
            {projects[selectedProject]?.technologies}
          </h2>

          <p className="text-gray-300 mt-5 leading-8">
            {projects[selectedProject]?.description}
          </p>

          <a
            href={projects[selectedProject]?.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 border border-green-200 px-5 py-2 rounded-lg text-green-200 hover:bg-green-200 hover:text-black transition-all duration-300"
          >
            View Project →
          </a>
        </div>

      </div>
    </>
  );
}

export default Projectlist;