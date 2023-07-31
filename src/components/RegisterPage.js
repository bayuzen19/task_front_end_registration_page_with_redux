import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions";
import "./RegisterPage.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isRegistered = useSelector((state) => state.isRegistered);
  const error = useSelector((state) => state.error);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password }));
  };

  return (
    <div className="container">
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {isRegistered && <p>Registration successful! Check your email for confirmation.</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterPage;


