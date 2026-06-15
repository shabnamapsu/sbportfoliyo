import React from "react";
import { Tabs } from "antd";

import Header from "../component/Header";
import AdminIntro from "./AdminIntro";
import AdminProject from "./AdminProject";
import AdminCourse from "./AdminCourse";
import AdminExperience from "./AdminExperience";
import AdminContact from "./AdminContact";
import Adminabout from "./Adminabout";
import { useSelector } from "react-redux";
// import AdminLogin from "./AdminLogin";

function Index() {
    const { portfolioData } = useSelector((state) => state.root);
  const items = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro/>,
    },
    {
      key: "2",
      label: "About",
      children: <Adminabout/>,
    },
    {
      key: "3",
      label: "Experience",
      children: <AdminExperience />,
    },
    {
        key:"4",
        label:"projects",
        children:<AdminProject/>
    },
    {
      key: "5",
      label: "couses",
      children: <AdminCourse />,
    },{
        key:"6",
        label:"Contact",
        children:<AdminContact/>
    }
  ];

  return (
    <div className="min-h-screen bg-blue-400 text-white">
      <Header />

      
        <Tabs
          defaultActiveKey="1"
          type="card"
          items={items}
    
        />
        

    </div>
  );
}

export default Index;