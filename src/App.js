import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import LoginSide from "./pages/Login/Login";
import SigninSide from "./pages/Signup/Signup";
import SelectionSide from "./pages/DomainSelection/Selection";
import ProductPage from "./pages/ProductPage/ProductPage";
import EmailVer from "./pages/EmailVerification/EmailVer";
import PhoneVer from "./pages/PhoneNumVerification/PhoneNum";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<LoginSide />} />
          <Route exact path="/signup" element={<SigninSide />} />
          <Route exact path="/emailver" element={<EmailVer />} />
          <Route exact path="/phonever" element={<PhoneVer />} />
          <Route exact path="/selection" element={<SelectionSide />} />
          <Route exact path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
