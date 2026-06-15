import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sectiontitle from "../component/Sectiontitle";

function Experiences() {
  const [selectedItem, setSelectedItem] = useState(0);

  const { portfolioData } = useSelector(
    (state) => state.root
  );

  const experiences = portfolioData?.experiences || [];

  if (!experiences.length) {
    return (
      <div className="text-center text-white py-10">
        Loading Experiences...
      </div>
    );
  }

  return (
    <div className="py-16">
      <Sectiontitle title="Experience" />

      <div className="flex flex-col md:flex-row gap-10 mt-10">

        {/* Timeline */}
        <div className="md:w-1/3 flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={exp._id || index}
              onClick={() => setSelectedItem(index)}
              className={`cursor-pointer p-4 border-l-4 transition-all duration-300 ${
                selectedItem === index
                  ? "border-orange-300 bg-slate-900 text-orange-300"
                  : "border-green-200 text-green-200"
              }`}
            >
              {exp.timeperiod}
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-orange-300">
            {experiences[selectedItem]?.title}
          </h2>

          <h3 className="text-green-200 text-lg mt-2">
            {experiences[selectedItem]?.company}
          </h3>

          <p className="mt-5 text-gray-300 leading-8">
            {experiences[selectedItem]?.description}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Experiences;