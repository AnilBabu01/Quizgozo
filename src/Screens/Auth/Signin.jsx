import React, { useState } from "react";
import "./Signin.css";
import bg from "../../assets/BG.png";
import imgleft from "../../assets/imgleft.jpeg";
import { countries } from "./Countries";
import Select from "react-select";
const customStyles = {
  control: (defaultStyles) => ({
    ...defaultStyles,
    padding: "1",
    testAlign: "center",
    border: "none",
  }),
};
const Signin = () => {
  const [countrycode, setcountrycode] = useState("");

  console.log("code", countrycode);
  return (
    <>
      <div className="mainauthdiv">
        <img src={bg} alt="ss" />
        <div className="formdiv">
          <div className="leftdiv">
            <img src={imgleft} alt="leftimg" />
          </div>
          <div className="rightdiv">
            <h1>Welcome Back!</h1>
            <p>Sign In to your account</p>
            <div className="selectdivoption">
              <Select
                required
                styles={customStyles}
                options={countries?.map((item) => ({
                  label: (
                    <div className="slectimgdiv">
                      <img src={item?.link} />
                    </div>
                  ),
                  value: `${item?.dial_code}`,
                }))}
                onChange={(opt) => setcountrycode(opt.value)}
              />
              {countrycode}
              <input type="text" />
            </div>
            <button className="getbtn">Get Otp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
