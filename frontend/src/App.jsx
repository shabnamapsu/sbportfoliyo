import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Loader from "./component/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  SetPortfolioData,
  Showloading,
  Hideloading,
} from "./redux/RootSlice";
import Index from "./admin/Index";
import AdminLogin from "./admin/AdminLogin";

function App() {
  const {loading,portfolioData} = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(Showloading());

    const response = await axios.get(
  "http://localhost:3000/api/portfolio/alldata"
);

console.log("API DATA =>", response.data);

dispatch(SetPortfolioData(response.data));
      dispatch(SetPortfolioData(response.data));
      
      

      dispatch(Hideloading());
    } catch (error) {
      dispatch(Hideloading());
      console.log(error);
    }
  };

 useEffect(() => {
  if (!portfolioData) {
    getPortfolioData();
  }
}, [portfolioData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Index/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;