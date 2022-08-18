import React from "react";
import Nav from "./nav";
import "../App.css";

const Home = () => {
  return (
    <div className="parent">
      <div className="logout-div">
        <a href="./Home" id="logo">
          {" "}
          Home
        </a>
        <button className="logout" class="btn btn-outline-secondary">
          <a href="./"> Logout</a>
        </button>
      </div>
      <div className="App">
        <button type="button" class="btn btn-outline-primary">
          <a href="./Apple">APPLE</a>
        </button>
        <button type="button" class="btn btn-outline-success">
          <a href="./Tesla">TESLA</a>
        </button>
        <button type="button" class="btn btn-outline-warning">
          <a href="./Bitcoin">BITCOIN</a>
        </button>
       
        <button type="button" class="btn btn-outline-primary">
          <a href="./technology">TECHNOLOGY</a>
        </button>
        <button type="button" class="btn btn-outline-primary">
          <a href="./hollywood">HOLLYWOOD</a>
        </button>
        
        
        <button type="button" class="btn btn-outline-info">
          <a href="./android">ANDROID</a>
        </button>
        <button type="button" class="btn btn-outline-warning">
          <a href="./automobile">AUTOMOBILE</a>
        </button>
        <button type="button" class="btn btn-outline-primary">
          <a href="./movies">MOVIES</a>
          
        </button>
        
          
      
      </div>
    </div>
  );
};
export default Home;
