import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white z-depth-0">
          <a
            {...props}
            href="/dashboard"
            className="brand-logo center black-text"
          >
            Best Life
            <p {...props} id="user" class="text-fix"></p>
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
            <Link to={"/dashboard"}>
              <a {...props} href="#">
                <i className="material-icons black-text">home</i>
              </a>
            </Link>
            
            <li>
            <Link to={"/events"}>
              <a {...props} href="#">
                <i className="material-icons black-text">stars</i>
              </a>
              </Link>
            </li>
            </li>
            <li>
            <Link to={"/achievements"}>
              <a {...props} href="#" className="black-text">
                <i className="material-icons black-text">check_circle</i>
              </a>
              </Link>
            </li>
            
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
            <Link to={"/newuser"}>
              <a
                href="/"
                className="waves-effect waves-light btn-small transparent black-text z-depth-0"
              >
                Login
              </a>
              </Link>
            </li>
            <li>
              <a
                href="newUser"
                className="waves-effect waves-light btn-small black"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;