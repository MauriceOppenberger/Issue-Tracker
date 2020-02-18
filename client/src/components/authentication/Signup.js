import React, { useState } from "react";
import SignupWrapper from "./styles/SignupWrapper";

import FormWrapper from "../styles/FormWrapper";

const Signup = props => {
  const [form, updateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, updateError] = useState(null);
  const handleInput = e => {
    e.persist();

    updateForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(result => {
        if (result.status === 403) {
          const error = new Error(
            "email already exists, please use a valid email address"
          );
          throw error;
        }
        if (result.status !== 200 && result.status !== 201) {
          const error = new Error("sign up failed");
          throw error;
        }
        return result.json();
      })
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
        updateError(err.message);
      });
  };
  return (
    <FormWrapper>
      <form className="signup" onSubmit={handleSubmit}>
        <p>
          <label>FirstName:</label>
          <input
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleInput}
            placeholder="Jane"
          ></input>
        </p>
        <p>
          <label>LastName:</label>
          <input
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleInput}
            placeholder="Doe"
          ></input>
        </p>
        <p>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder="jaondoe@gmail.com"
          ></input>
        </p>
        <p>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleInput}
          ></input>
        </p>
        {error && <p className="error">{error}</p>}
        <button className="btn" type="submit">
          Signup
        </button>
      </form>
    </FormWrapper>
  );
};

export default Signup;
