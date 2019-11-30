import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const authContext = useContext(AuthContext);

  const { email, password } = user;
  const { loginUser } = authContext;

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(user);
  };

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
