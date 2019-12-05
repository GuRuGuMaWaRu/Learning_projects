import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: ""
  });
  const authContext = useContext(AuthContext);

  const { name, email, password1, password2 } = user;
  const { registerUser, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password1 === "") {
      console.log("Please fill in all fields");
    } else if (password1 !== password2) {
      console.log("Passwords must match");
    } else {
      registerUser(user);
    }
  };

  return (
    <div>
      <h4>Registration</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="password1">Password:</label>
          <input
            type="password"
            name="password1"
            value={password1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password2">Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
