import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminExperience() {
  const { portfolioData } = useSelector((state) => state.root);

  const [experience, setExperience] = useState({
    _id: "",
    timeperiod: "",
    title: "",
    company: "",
    description: "",
  });

  useEffect(() => {
    if (portfolioData?.experiences?.length > 0) {
      setExperience(portfolioData.experiences[0]);
    }
  }, [portfolioData]);

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/save-experience",
        experience
      );

      console.log(response.data);
      alert("Experience Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/portfolio/update-experience",
        experience
      );

      console.log(response.data);
      alert("Experience Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-full">
      <form
        onSubmit={handleSave}
        className="bg-white p-4 shadow-lg max-w-full mx-auto flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-center text-slate-900">
          Experience
        </h1>

        <input
          type="text"
          name="timeperiod"
          placeholder="Time Period (2025)"
          value={experience.timeperiod}
          onChange={handleChange}
          className="p-3 rounded bg-white text-gray-500 border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={experience.title}
          onChange={handleChange}
          className="p-3 rounded bg-white text-gray-500 border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <input
          type="text"
          name="company"
          placeholder="Company / Personal Project"
          value={experience.company}
          onChange={handleChange}
          className="p-3 rounded bg-white text-gray-500 border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          value={experience.description}
          onChange={handleChange}
          className="p-3 rounded bg-white text-gray-500 border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded text-white font-semibold"
          >
            Save
          </button>

          <button
            type="button"
            onClick={handleUpdate}
            className="bg-orange-500 px-5 py-2 rounded text-white font-semibold"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminExperience;