import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk pesan kesalahan
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function login() {
    let item = { email, password };
  
    try {
      const response = await axios.post("http://localhost:8000/api/login", item);
      console.log("response", response.data);
  
      if (response.data.success) {
        localStorage.setItem("user-info", JSON.stringify(response.data));
        localStorage.setItem("id", response.data.user.id);
        navigate("/add");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("Ada sedikit Masalah. silahkan coba lagi :)");
      console.error(error);
    }
  }
  
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <br />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mt-3"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mt-3"
        />
        {error && <p className="text-danger">{error}</p>}
        <br />
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
}

export default Login;