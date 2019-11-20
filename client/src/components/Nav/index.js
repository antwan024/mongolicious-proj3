import React from "react";
// import "./styles.css";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white ">
          <a href="/dashboard" className="brand-logo center black-text">
            Best Life 
            <p {...props} id="user" class="text-fix"></p>
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="/dashboard">
                <i className="material-icons black-text">home</i>
              </a>
            </li>
            <li>
              <a href="achievements" className="black-text">
                <i className="material-icons black-text">check_circle</i>
              </a>
            </li>
            <li>
              <a href="events">
                <i className="material-icons black-text">stars</i>
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/" className="waves-effect waves-light btn-small black">Login</a>
            </li>
            <li>
              <a href="newUser" className="waves-effect waves-light btn-small black">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
