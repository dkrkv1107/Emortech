import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="container">
      <div className="form-group">
        <label for=""></label>
        <p className="heading">Password reset</p>
        <p>NEW PASSWORD</p>
        <input
          type="password"
          className="form-control"
          name=""
          id=""
          placeholder=""
        />
        <p>RE-ENTER NEW PASSWORD</p>
        <input
          type="password"
          className="form-control"
          name=""
          id=""
          placeholder=""
        />

        <input type="submit" className="submit" value="RESET PASSWORD" />
      </div>
    </div>
  );
}

export default Form;
