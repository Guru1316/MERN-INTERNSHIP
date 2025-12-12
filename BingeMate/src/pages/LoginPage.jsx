import { useState } from "react";
import "../styles/login.css";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === "guruprasadgdr1@gmail.com" && password === "k1k2g3g4")
    {
      localStorage.setItem("auth", true)
    }
    console.log(email, password);
  }
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" required></input>
        <label>Password</label>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required></input>
        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;