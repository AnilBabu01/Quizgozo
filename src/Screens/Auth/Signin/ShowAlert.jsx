import React from "react";
import error from "../../../assets/error.png";
import logined from "../../../assets/logined.png";
import "./ShowAlert.css";
const ShowAlert = (showtype) => {
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
