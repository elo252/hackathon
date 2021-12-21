import React, { useState, useEffect } from "react";
import "./Selection.css";
import SelectScreenImg from "./select.jpg";
import Select from "react-dropdown-select";
import SelectDropDownComponent from "./SelectDropDownComponent";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// Logout code
// const result = await Axios({
// 	method: "POST",
// 	withCredentials: true,
// 	headers: {
// 		"Authorization": `Bearer${result}`
// 	}
// })

export default function SelectionSide() {
  useEffect(() => {
    const result = window.sessionStorage.getItem("user");
    // navigate("/login");
    if (result === null) {
      window.location.href = "/login";
    }
    console.log("Result: ", result);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  return (
    <div className="landingContainer">
      <div className="nav-bar">
        <div className="mylogo"> FindIn </div>
      </div>

      <div className="landingImg">
        <div className="overlay">
          <img src={SelectScreenImg} className="landingScreenImg" />
        </div>
        <h2 className="text">
          <i>Your business ventures</i>
        </h2>
      </div>

      <div className="selection_dropdown">
        <SelectDropDownComponent />
      </div>
      <div>
        <button
          className="confirm_button"
          onClick={() => {
            navigate("/product");
          }}
        >
          Confirm and proceed
        </button>
      </div>
    </div>
  );
}
