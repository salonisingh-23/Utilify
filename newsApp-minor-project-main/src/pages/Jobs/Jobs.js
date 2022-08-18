import React from "react";
import FetchJob from "./components/FetchJob";import "./style.css";
import Navbar from "./components/Navbar";

const Jobs = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="jobApp">
    
        <FetchJob className="fetchJob" />
        <div class="rotating">
          <div className="insideRotate"></div>
        </div>
        <footer>Copyright &copy; 2022</footer>
      </div>
    </div>
  );
};

export default Jobs;