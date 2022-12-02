import React, { useState, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [pageScroll, setPageScroll] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 1) {
      setPageScroll(true);
    } else {
      setPageScroll(false);
    }
  });

  useEffect(() => {
    if (pageScroll) {
      document.getElementById("header").classList.add("header-scroll");
    } else {
      document.getElementById("header").classList.remove("header-scroll");
    }
  }, [pageScroll]);

  return (
    <div className='header' id='header'>
      <div className='header-logo'>
        <a href='#'>OneSchool</a>
      </div>
      <div className='header-navbar'>
        <ul className='header-navbar-list'>
          <li className='active-li'>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Courses</a>
          </li>
          <li>
            <a href='#'>Programs</a>
          </li>
          <li>
            <a href='#'>Teachers</a>
          </li>
        </ul>
      </div>
      <div className='header-btn'>
        <a href='#'>
          <button>CONTACT US</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
