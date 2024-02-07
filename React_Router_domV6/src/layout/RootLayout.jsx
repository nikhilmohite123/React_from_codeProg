import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <h1>Nav itm</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={(Obj) => {
                return Obj.isActive ? "activeNav" : null;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <h1>Content</h1>
      <Outlet />
    </>
  );
}

export default RootLayout;
