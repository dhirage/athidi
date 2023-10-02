import React, { useState } from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

//imported icons
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  //state to track and update navbar
  const [navBar, setNavBar] = useState("menu");

  //function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  };

  //function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };
  const redirectToHome = () => {
    window.location.href = "#"; // Replace "/" with your desired home page URL
  };

  return (
    <div className="navBar">
      <div
        className="logoDiv"
        onClick={redirectToHome}
        style={{ cursor: "pointer" }}
      >
        <img
          src="./assets/logo.png"
          alt="logo"
          // style={{ height: "50px", width: "50px" }}
        />
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        {/*icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
      {isAuthenticated && (
        <li>
          <p>{user.name}</p>
        </li>
      )}
      {isAuthenticated ? (
        <button
          className="signUpBtn btn"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button className="signUpBtn btn" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}

      {/*icon to toggle navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
