import React, { useEffect } from "react";
import "./loadingIcon.css";

const LoadingIcon = () => {
  return (
    <div>
      <p style={{ color: "black", fontSize: "20px" }}>Loading ...</p>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingIcon;
