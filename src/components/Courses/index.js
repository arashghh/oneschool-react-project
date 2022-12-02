import React, { useEffect } from "react";
import "./Courses.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='courses'>
      <h1>Courses</h1>
      <div className='arash' data-aos='fade-up'></div>
    </div>
  );
};

export default Courses;
