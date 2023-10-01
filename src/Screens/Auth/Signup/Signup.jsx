import React, { useState } from "react";
import "./Signup.css";
import imgleft from "../../../assets/imgleft.png";
import { countries } from "./Countries";
import Select from "react-select";
import OtpInput from "react-otp-input";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ShowAlert from "./ShowAlert";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 0,
  borderRadius: 50,
};

const customStyles = {
  control: (defaultStyles) => ({
    ...defaultStyles,
    padding: "1",
    testAlign: "center",
    border: "none",
  }),
};
const Signup = () => {
  const [showtype, setshowtype] = useState(false);
  const [countrycode, setcountrycode] = useState("");
  const [showverifyopt, setshowverifyopt] = useState(false);
  const [showcontinue, setshowcontinue] = useState(false);
  const [phoneNo, setphoneNo] = useState("");
  const [otp, setOtp] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submit = () => {
    setshowcontinue(true);
  };

  const verifyotp = () => {
    if (otp) {
      setshowtype(true);
      handleOpen();
    }
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ShowAlert showtype={showtype} handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
      <div className="mainauthdiv">
        <div className="formdiv">
          <div className="leftdiv">
            <img src={imgleft} alt="leftimg" />
          </div>
          <div className="rightdiv">
            {showverifyopt ? (
              <>
                <h1 htmlFor="otp">Enter OTP</h1>
                <p>Enter the 6-digit OTP sent to</p>
                <div className="input-group">
                  <OtpInput
                    id="otp"
                    value={otp}
                    className=""
                    onChange={setOtp}
                    numInputs={6}
                    containerStyle="otp-container"
                    inputStyle="otp-input"
                    renderInput={(props) => <input {...props} />}
                    renderSeparator={
                      <span style={{ margin: "0.2rem" }}> </span>
                    }
                  />
                </div>
                <button onClick={() => verifyotp()} className="getbtn">
                  Submit
                </button>
              </>
            ) : (
              <>
                {showcontinue ? (
                  <>
                    <h1>Welcome to Quizgozo!</h1>
                    <p className="createdivtext">Create New account</p>
                    <div className="divinputInfo">
                      <input
                        type="text"
                        placeholder="Name"
                        // value={phoneNo}
                        // name="phoneNo"
                        // onChange={(e) => setphoneNo(e.target.value)}
                      />
                    </div>
                    <div className="divinputInfo">
                      <input
                        type="text"
                        placeholder="Email"
                        // value={phoneNo}
                        // name="phoneNo"
                        // onChange={(e) => setphoneNo(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={() => setshowverifyopt(true)}
                      className="getbtn"
                    >
                      Continue
                    </button>
                  </>
                ) : (
                  <>
                    <h1>Welcome to Quizgozo!</h1>
                    <p>Create New account</p>
                    <div className="selectdivoption">
                      <Select
                        required
                        styles={customStyles}
                        options={countries?.map((item) => ({
                          label: (
                            <div className="slectimgdiv">
                              <img src={item?.link} alt={item.dial_code} />
                            </div>
                          ),
                          value: `${item?.dial_code}`,
                        }))}
                        onChange={(opt) => setcountrycode(opt.value)}
                      />
                      <span className="onlycodeinput">{countrycode}</span>
                      <input
                        type="text"
                        value={phoneNo}
                        name="phoneNo"
                        onChange={(e) => setphoneNo(e.target.value)}
                      />
                    </div>
                    <button onClick={() => submit()} className="getbtn">
                      Get Otp
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
