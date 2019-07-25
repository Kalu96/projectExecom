import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navigation = () => {
  return (
    <div className="main-nav-link">
      <Link className="nav-link"  to="/Countries">
        Countries
      </Link>
      <Link className="nav-link"  to="/Leagues">
        Leagues
      </Link>
      <Link className="nav-link"  to="/SportEvent">
        Sport-Event
      </Link>
      <Search />
    </div>
  );
};

export default Navigation;
