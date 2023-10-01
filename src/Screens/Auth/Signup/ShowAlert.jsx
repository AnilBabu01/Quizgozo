import React from "react";
import error from "../../../assets/error.jpeg";
import logined from "../../../assets/logined.jpeg";
import "./ShowAlert.css";
const ShowAlert = (showtype, handleClose) => {
  return (
    <>
      <div className="mainlertdiv">
        {showtype ? (
          <>
            <img src={logined} alt="img" />
          </>
        ) : (
          <>
            <img src={error} alt="img" />
          </>
        )}

        {/* <button onClick={() => handleClose}>Ok!</button> */}
      </div>
    </>
  );
};

export default ShowAlert;
