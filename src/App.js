import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleemailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const [valid, setValid] = useState(false);

  return (
    <div className="form-div">
      <form className="user-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering.
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
        ></input>
        {submitted && !values.firstName ? (
          <span>Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
        ></input>
        {submitted && !values.lastName ? (
          <span>Please enter a last name</span>
        ) : null}

        <input
          onChange={handleemailInputChange}
          value={values.email}
          className="form-field"
          type="text"
          placeholder="Email"
        ></input>
        {submitted && !values.email ? (
          <span>Please enter a email address</span>
        ) : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
