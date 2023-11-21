import React from "react";
import ReactDom from "react-dom";
import loaderGif from "../../assets/loader.gif";
import "./Loader.css";

const Loader = () => {
  return (
    ReactDom.createPortal(
      <div className="wrapper">
        <div className="loader">
          <img src={loaderGif} alt="" />
        </div>
      </div>
    ),
    document.getElementById("loader")
  );
};

export default Loader;
