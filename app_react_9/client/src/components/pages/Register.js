import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: ""
  });

  const { name, email, password1, password2 } = user;

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h4>Registration</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </form>
    </div>
  );
};

export default Register;
