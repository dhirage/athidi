import React, { useEffect } from "react";
import "./Home.css";

//imported assets

import Video from "/assets/everest.mp4";
import image1 from "/assets/image15.jpg";
import image2 from "/assets/image16.jpg";
import image3 from "/assets/image17.jpg";
import image4 from "/assets/image18.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

//imported icons
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">
          Unlock Your Travel Dreams With <span>Athidi Hospitality!</span>
        </h1>
        <h2>" अतिथि देवो भव: "</h2>
        <p data-aos="fade-up">
          Embodies the indian cultural value of treating guests with utmost
          respect and reverance, akin to deities.
          <br /> Whereas, It translates as <span>"Guest are like Gods".</span>
        </p>
        <button className="btn flex" data-aos="fade-up">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={image1} alt="Popular Places" />
            <img src={image2} alt="Popular Places" />
            <img src={image3} alt="Popular Places" />
            <img src={image4} alt="Popular Places" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
