import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Adminabout() {
  const { portfolioData } = useSelector((state) => state.root);

  const [aboutData, setAboutData] = useState({
    _id: "",
    lottieurl: "",
    description1: "",
    description2: "",
    skills: "",
  });

  useEffect(() => {
    if (portfolioData?.about) {
      setAboutData({
        _id: portfolioData.about._id,
        lottieurl: portfolioData.about.lottieurl,
        description1: portfolioData.about.description1,
        description2: portfolioData.about.description2,
        skills: portfolioData.about.skills.join(", "),
      });
    }
  }, [portfolioData]);

  const handleChange = (e) => {
    setAboutData({
      ...aboutData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE
  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://sbportfoliyo-2.onrender.com/api/portfolio/save-about",
        {
          ...aboutData,
          skills: aboutData.skills.split(","),
        }
      );

      console.log(response.data);
      alert("About Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        "https://sbportfoliyo-2.onrender.com/api/portfolio/update-about",
        {
          ...aboutData,
          skills: aboutData.skills.split(","),
        }
      );

      console.log(response.data);
      alert("About Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center px-1 w-full">
      <div className="bg-white p-8 w-full shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          About Section
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="lottieurl"
            placeholder="Lottie URL"
            value={aboutData.lottieurl}
            onChange={handleChange}
            className="p-3 rounded border border-blue-200 shadow-lg"
          />

          <textarea
            name="description1"
            placeholder="Description 1"
            value={aboutData.description1}
            onChange={handleChange}
            rows="4"
            className="p-3 rounded border border-blue-200 shadow-lg"
          />

          <textarea
            name="description2"
            placeholder="Description 2"
            value={aboutData.description2}
            onChange={handleChange}
            rows="4"
            className="p-3 rounded border border-blue-200 shadow-lg"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            value={aboutData.skills}
            onChange={handleChange}
            className="p-3 rounded border border-blue-200 shadow-lg"
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-green-500 px-6 py-2 rounded text-white"
            >
              Save
            </button>

            <button
              onClick={handleUpdate}
              className="bg-orange-500 px-6 py-2 rounded text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminabout;