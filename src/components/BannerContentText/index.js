import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BannerContentText = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <h1 data-aos='fade-up' data-aos-delay='500'>
        Learn From The Expert
      </h1>
      <p data-aos='fade-up' data-aos-delay='1000'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
        nulla sed quis rerum amet natus quas necessitatibus.
      </p>

      <a href='#'>
        <button
          className='banner-content-btn'
          data-aos='fade-up'
          data-aos-delay='1300'
        >
          ADMISSION NOW
        </button>
      </a>
    </div>
  );
};

export default BannerContentText;
