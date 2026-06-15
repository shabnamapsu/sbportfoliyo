import React from "react";
import { useSelector } from "react-redux";
import Sectiontitle from "../component/Sectiontitle";
import contact from "../assets/contact.svg";

function Contact() {
  const { portfolioData } = useSelector(
    (state) => state.root
  );

  const contactData = portfolioData?.contact || {};

  const user = {
    name: contactData.name,
    email: contactData.email,
    age: contactData.age,
    address: contactData.address,
    gender: contactData.gender,
  };

  return (
    <div className="py-16">
      <Sectiontitle title="Contact Me" />

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">

        {/* Contact Card */}
        <div className="w-full md:w-1/2 bg-slate-900 rounded-xl p-8 shadow-lg">
          <p className="text-green-200 text-xl">{"{"}</p>

          {Object.keys(user).map((key) => (
            <div key={key} className="ml-6 py-2">
              <span className="text-orange-300 font-semibold">
                "{key}"
              </span>
              <span className="text-white"> : </span>
              <span className="text-green-200">
                "{user[key]}"
              </span>
            </div>
          ))}

          <p className="text-green-200 text-xl">{"}"}</p>
        </div>

        {/* Contact Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contact}
            alt="Contact"
            className="w-72 md:w-96 object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Contact;