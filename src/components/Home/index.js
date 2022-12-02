import React from "react";
import BannerContentText from "../BannerContentText";
import HomeSignupForm from "../HomeSignupForm";
import "./Home.scss";

const Home = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <div className='banner-content-text'>
          <BannerContentText />
        </div>
        <div className='banner-content-form'>
          <HomeSignupForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
