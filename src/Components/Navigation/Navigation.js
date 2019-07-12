import React from "react";
import axios from "axios";
import "./Navigation.css";
import {NavLink } from "react-router-dom";


const Navigation = () => {
   
        return(
            <div className = "test">
                <NavLink className ="nav-link" exact to="/Countries">Countries</NavLink>
                <NavLink className ="nav-link" exact to="/Leagues">Leagues</NavLink>
                <NavLink className ="nav-link" exact to="/Player">Player</NavLink>
                <NavLink className ="nav-link" exact to="/SportEvent">SportEvent</NavLink>
                <NavLink className ="nav-link" exact to="/Schedule">Schedule</NavLink>
            </div>
        );
    
}

export default Navigation;