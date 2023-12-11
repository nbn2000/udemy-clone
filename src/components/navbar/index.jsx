import "./styles.css";
import logo from "../../assets/udemy-logo.png";
import { useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showHide, setShowHide] = useState({ search: false, menu: false });
  const [account, setAccount] = useState(false);
  const [grey, setGrey] = useState("");
  const location = useLocation().pathname;
  useEffect(() => {
    const handleGreyColor = () => {
      if (location === "/account") {
        setAccount(true);
        setGrey("grey");
      } else {
        setAccount(false);
        if (location === "/detail/courses" || location === "/blog") {
          return setGrey("grey");
        } else {
          return setGrey("");
        }
      }
    };

    handleGreyColor();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);
  return (
    <div className={grey}>
      {screenWidth > 900 ? (
        <nav className="big-screen">
          <Link to="/" className="udemy-logo">
            <img src={logo} alt="udemy logo" />
          </Link>
          <div className="float-right">
            <div className="searchbar">
              <input type="search" placeholder="Search bar" />
              <button>
                <CiSearch className="search-icon" />
              </button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Category</button>
              <AiFillCaretDown className="icon-down" />
              <div className="dropdown-content">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/detail/courses">Detail Courses</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/account">Account</NavLink>
              </div>
            </div>

            <Link to="/">Bacome an Mentor</Link>
            {account ? (
              <div className="account-name">
                <IoIosArrowDown />
                <div className="avatar-placeholder"></div>
                <span className="x-small">Romadhon@gmail.com</span>
              </div>
            ) : (
              <>
                <Link to="/login" className="login btn">
                  Login
                </Link>
                <Link to="/signup" className="signup btn">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      ) : (
        <nav className="small-screen">
          {!showHide.search && (
            <>
              <div className="menu">
                <button
                  className="menu-button"
                  onClick={() =>
                    setShowHide({ search: showHide.search, menu: true })
                  }
                >
                  <HiMenu />
                </button>
                <div
                  className="displayed-menu"
                  style={
                    showHide.menu
                      ? {
                          transform: "translateX(0)",
                        }
                      : { transform: "translateX(-500px)" }
                  }
                >
                  {account ? (
                    <>
                      <div className="account-name">
                        <div className="avatar-placeholder"></div>
                        <span className="x-small">Romadhon@gmail.com</span>
                      </div>
                      <span className="line"></span>
                      <Link to="/">Bacome an Mentor</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/">Bacome an Mentor</Link>
                      <Link to="/login" className="login">
                        Login
                      </Link>
                      <Link to="/signup" className="signup">
                        Sign Up
                      </Link>
                    </>
                  )}
                  <span className="line"></span>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/courses">Courses</NavLink>
                  <NavLink to="/detail/courses">Detail Courses</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/account">Account</NavLink>
                  <button
                    className="close-button"
                    onClick={() =>
                      setShowHide({ search: showHide.search, menu: false })
                    }
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              <Link to="/">
                <img src={logo} alt="udemy logo" />
              </Link>
            </>
          )}
          <div
            className="searchbar"
            style={!showHide.search ? { border: "none", width: "48px" } : {}}
          >
            {showHide.search && (
              <input type="search" placeholder="Search bar" />
            )}
            <button
              onClick={() =>
                setShowHide({ search: !showHide.search, menu: showHide.menu })
              }
            >
              <CiSearch className="search-icon" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};
export default Navbar;
