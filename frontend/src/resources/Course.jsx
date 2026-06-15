import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sectiontitle from "../component/Sectiontitle";

function Course() {
  const [selectedCourse, setSelectedCourse] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  const courses = portfolioData?.courses || [];

  if (courses.length === 0) {
    return (
      <div className="text-center text-white py-10">
        Loading Courses...
      </div>
    );
  }

  return (
    <>
      <Sectiontitle title="Courses & Certifications" />

      <div className="py-10 flex flex-col lg:flex-row gap-10">

        {/* Left Side */}
        <div className="lg:w-1/3 flex flex-col">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => setSelectedCourse(index)}
              className={`cursor-pointer px-5 py-4 border-l-4 transition-all duration-300 ${
                selectedCourse === index
                  ? "border-orange-300 bg-slate-900 text-orange-300"
                  : "border-green-200 text-green-200"
              }`}
            >
              {course.name}
            </div>
          ))}
        </div>

        {/* Middle */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-orange-300">
            {courses[selectedCourse]?.name}
          </h1>

          <h2 className="text-xl text-green-200 mt-3">
            {courses[selectedCourse]?.institute}
          </h2>

          <p className="text-gray-300 mt-5 leading-8">
            {courses[selectedCourse]?.description}
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/3 flex justify-center items-center">
          <img
            src={courses[selectedCourse]?.image}
            alt={courses[selectedCourse]?.name}
            className="w-full max-w-sm h-[250px] object-contain rounded-lg bg-slate-900 p-5"
          />
        </div>

      </div>
    </>
  );
}

export default Course;