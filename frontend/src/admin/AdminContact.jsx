import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);

  const [contact, setContact] = useState({
    _id: "",
    name: "",
    email: "",
    age: "",
    address: "",
    gender: "",
  });

  useEffect(() => {
    if (portfolioData?.contact) {
      setContact({
        _id: portfolioData.contact._id,
        name: portfolioData.contact.name,
        email: portfolioData.contact.email,
        age: portfolioData.contact.age,
        address: portfolioData.contact.address,
        gender: portfolioData.contact.gender,
      });
    }
  }, [portfolioData]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  // Save Contact
  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/save-contact",
        contact
      );

      console.log(response.data);
      alert("Contact Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Update Contact
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/portfolio/update-contact",
        contact
      );

      console.log(response.data);
      alert("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white max-w-full">
      <div className="bg-white p-5 shadow-lg w-full mx-auto flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-slate-900 text-center">
          Contact Information
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={contact.name}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={contact.email}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={contact.age}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={contact.address}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-blue-300 shadow-xl"
        />

        <select
          name="gender"
          value={contact.gender}
          onChange={handleChange}
          className="p-3 rounded border border-blue-200 shadow-blue-300 shadow-xl"
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="bg-green-500 px-5 py-2 rounded text-white font-semibold"
          >
            Save
          </button>

          <button
            onClick={handleUpdate}
            className="bg-orange-500 px-5 py-2 rounded text-white font-semibold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminContact;