import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
const navigate = useNavigate();

const [user, setUser] = useState({
username: "",
password: "",
});

const handleChange = (e) => {
setUser({
...user,
[e.target.name]: e.target.value,
});
};

const handleLogin = async (e) => {
e.preventDefault();


try {
  const response = await 
    axios.post("http://localhost:3000/api/portfolio/login", user);

  localStorage.setItem("token", response.data.token);

  alert("Login Successful");

  navigate("/admin");
} catch (error) {
  alert(
    error.response?.data?.message || "Login Failed"
  );
}


};

return ( <div className="flex justify-center items-center h-screen bg-slate-100"> <form
     onSubmit={handleLogin}
     className="bg-white p-8 rounded-lg shadow-lg w-96"
   > <h1 className="text-3xl font-bold text-center mb-6">
Admin Login </h1>

    <input
      type="text"
      name="username"
      placeholder="Username"
      value={user.username}
      onChange={handleChange}
      className="w-full border p-3 mb-4 rounded"
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={user.password}
      onChange={handleChange}
      className="w-full border p-3 mb-4 rounded"
    />

    <button
      type="submit"
      className="w-full bg-blue-900 text-white p-3 rounded"
    >
      Login
    </button>
  </form>
</div>


);
}

export default AdminLogin;
