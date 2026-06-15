import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminProject() {
const { portfolioData } = useSelector((state) => state.root);

const [project, setProject] = useState({
_id: "",
name: "",
technologies: "",
description: "",
image: "",
link: "",
});

useEffect(() => {
if (portfolioData?.projects?.length > 0) {
setProject(portfolioData.projects[0]);
}
}, [portfolioData]);

const handleChange = (e) => {
setProject({
...project,
[e.target.name]: e.target.value,
});
};

const handleSave = async (e) => {
e.preventDefault();


try {
  const response = await axios.post(
    "http://localhost:3000/api/portfolio/save-project",
    project
  );

  console.log(response.data);
  alert("Project Saved Successfully");
} catch (error) {
  console.log(error);
  alert("Error Saving Project");
}


};

const handleUpdate = async () => {
try {
const response = await axios.put(
"http://localhost:3000/api/portfolio/update-project",
project
);

  console.log(response.data);
  alert("Project Updated Successfully");
} catch (error) {
  console.log(error);
  alert("Error Updating Project");
}


};

const handleDelete = async () => {
try {
await axios.delete(
`http://localhost:3000/api/portfolio/delete-project/${project._id}`
);


  alert("Project Deleted Successfully");

  setProject({
    _id: "",
    name: "",
    technologies: "",
    description: "",
    image: "",
    link: "",
  });
} catch (error) {
  console.log(error);
  alert("Error Deleting Project");
}

};

const handleAddProject = () => {
setProject({
_id: "",
name: "",
technologies: "",
description: "",
image: "",
link: "",
});
};

return ( <div className="w-full bg-white p-5 shadow-lg rounded-lg"> <h1 className="text-3xl font-bold text-center text-slate-900 mb-5">
Projects Information </h1>


  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-3 text-slate-800">
      Available Projects
    </h2>

    <div className="flex flex-wrap gap-3">
      {portfolioData?.projects?.map((item) => (
        <div
          key={item._id}
          onClick={() => setProject(item)}
          className={`cursor-pointer px-4 py-2 rounded-lg border ${
            project._id === item._id
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  </div>

  <form onSubmit={handleSave} className="flex flex-col gap-4">
    <input
      type="text"
      name="name"
      placeholder="Project Name"
      value={project.name}
      onChange={handleChange}
      className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
    />

    <input
      type="text"
      name="technologies"
      placeholder="Technologies"
      value={project.technologies}
      onChange={handleChange}
      className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
    />

    <textarea
      name="description"
      placeholder="Project Description"
      rows="5"
      value={project.description}
      onChange={handleChange}
      className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
    />

    <input
      type="text"
      name="image"
      placeholder="Image URL"
      value={project.image}
      onChange={handleChange}
      className="p-3 rounded border border-blue-200 shadow-lg shadow-blue-200 text-gray-600"
    />

    <input
      type="text"
      name="link"
      placeholder="Project Link"
      value={project.link}
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
        onClick={handleAddProject}
        className="bg-gray-600 text-white px-5 py-2 rounded"
      >
        Add Project
      </button>
    </div>
  </form>
</div>


);
}

export default AdminProject;
