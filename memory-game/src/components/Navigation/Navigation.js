import React from "react";
import "./Navigation.css";

const Navigation = props => (
  <div>
  <nav className="navbar navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand heading" href="#">
    <img src="http://1000logos.net/wp-content/uploads/2017/08/Marvel-Logo.png" height="50" className="d-inline-block align-bottom" alt="" />
    Memory Test
  </a>
  <div>{props.children}</div>
  </div>
</nav>
</div>
)

export default Navigation;
