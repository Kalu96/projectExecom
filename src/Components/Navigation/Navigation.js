import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navigation = () => {
  return (
    <div className="main-nav-link">
      <Search />
      <Link className="nav-link-leagues"  to="/Leagues">
        Leagues
      </Link>     
      
    </div>
  );
};

export default Navigation;
