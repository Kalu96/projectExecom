import React from "react";
import axios from "axios";
import "./Navigation.css";
import { Link } from "react-router-dom";

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
      <Link className="nav-link"  to="/Schedule">
        Schedule
      </Link>
    </div>
  );
};

export default Navigation;
