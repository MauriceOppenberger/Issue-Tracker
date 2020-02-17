import React, { useState } from "react";

const Signup = props => {
  const [form, updateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
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
        console.log(typeof result.status);
        if (result.status !== 200 && result.status !== 201) {
          const error = new Error("not allowed");
          throw error;
        }
        return result.json();
      })
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            FirstName:
            <input
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleInput}
              placeholder="Jane"
            ></input>
          </label>
        </p>
        <p>
          <label>
            LastName:
            <input
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleInput}
              placeholder="Doe"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInput}
              placeholder="jaondoe@gmail.com"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleInput}
            ></input>
          </label>
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
