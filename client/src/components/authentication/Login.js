import React, { useState } from "react";
import FromWrapper from "../styles/FormWrapper";

const Login = props => {
  console.log(props);
  const [form, updateForm] = useState({
    email: "",
    password: ""
  });
  const [error, updateError] = useState();

  const handleInput = e => {
    e.persist();
    updateForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(result => {
        if (result.status === 401 || result.status === 403) {
          const error = new Error("Email or Password invalid");
          throw error;
        }
        if (result.status !== 200) {
          const error = new Error("Faild to Fetch Data from Server");
          throw error;
        }
        return result.json();
      })
      .then(res => {
        props.auth();
        props.history.push({ pathname: "/", state: { user: res.message } });
      })
      .catch(err => {
        updateError(err.message);
        console.log(err);
      });
  };
  return (
    <FromWrapper>
      <form className="authForm" onSubmit={handleSubmit}>
        <p>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder="janedoe@gmail.com"
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
          Login
        </button>
      </form>
    </FromWrapper>
  );
};

export default Login;
