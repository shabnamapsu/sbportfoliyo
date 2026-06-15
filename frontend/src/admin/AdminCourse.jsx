import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminCourse() {
  const { portfolioData } = useSelector((state) => state.root);

  const [course, setCourse] = useState({
    _id: "",
    name: "",
    institute: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (portfolioData?.courses?.length > 0) {
      setCourse(portfolioData.courses[0]);
    }
  }, [portfolioData]);

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const courseData = {
        name: course.name,
        institute: course.institute,
        description: course.description,
        image: course.image,
      };

      const response = await axios.post(
        "https://sbportfoliyo-2.onrender.com/api/portfolio/save-course",
        courseData
      );

      console.log(response.data);
      alert("Course Saved Successfully");
    } catch (error) {
      console.log(error.response?.data || error);
      alert(
        error.response?.data?.message || "Error Saving Course"
      );
    }
  };

  const handleUpdate = async () => {
    if (!course._id) {
      alert("Please select a course first");
      return;
    }

    try {
      const response = await axios.put(
        "https://sbportfoliyo-2.onrender.com/api/portfolio/update-course",
        course
      );

      console.log(response.data);
      alert("Course Updated Successfully");
    } catch (error) {
      console.log(error.response?.data || error);
      alert("Error Updating Course");
    }
  };

  const handleDelete = async () => {
    if (!course._id) {
      alert("Please select a course first");
      return;
    }

    try {
      await axios.delete(
        `https://sbportfoliyo-2.onrender.com/api/portfolio/delete-course/${course._id}`
      );

      alert("Course Deleted Successfully");

      setCourse({
        _id: "",
        name: "",
        institute: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.log(error.response?.data || error);
      alert("Error Deleting Course");
    }
  };

  const handleAddCourse = () => {
    setCourse({
      _id: "",
      name: "",
      institute: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="w-full bg-white p-5 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-slate-900 mb-5">
        Courses Information
      </h1>

      {/* Course List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-slate-800">
          Available Courses
        </h2>

        <div className="flex flex-wrap gap-3">
          {portfolioData?.courses?.map((item) => (
            <div
              key={item._id}
              onClick={() => setCourse(item)}
              className={`cursor-pointer px-4 py-2 rounded-lg border ${
                course._id === item._id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={course.name}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
        />

        <input
          type="text"
          name="institute"
          placeholder="Institute Name"
          value={course.institute}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
        />

        <textarea
          name="description"
          placeholder="Course Description"
          rows="5"
          value={course.description}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
        />

        <input
          type="text"
          name="image"
          placeholder="Course Image URL"
          value={course.image}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
        />

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="bg-green-500 text-white px-5 py-2 rounded"
          >
            Save
          </button>

          <button
            type="button"
            onClick={handleUpdate}
            className="bg-orange-500 text-white px-5 py-2 rounded"
          >
            Update
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-5 py-2 rounded"
          >
            Delete
          </button>

          <button
            type="button"
            onClick={handleAddCourse}
            className="bg-gray-600 text-white px-5 py-2 rounded"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminCourse;