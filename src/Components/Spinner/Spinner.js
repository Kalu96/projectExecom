import React from "react";
import BallLogo from "../../Images/spinner.jpg";
import "./Spinner.css"

export const Spinner = () => {
  return <img className="loading-logo" src={BallLogo} alt="Loading....." />;
};
