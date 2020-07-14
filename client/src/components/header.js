import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div>
      <header className="header">
        <div className="brand">
          <Link to="/">SmartPhone</Link>
        </div>
        <div className="header-links">
          <Link to="/cart/:id">
            <a href="#">Cart</a>
          </Link>

          {userInfo ? (
            <Link to="/profile">{userInfo.name}</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
export default Header;
