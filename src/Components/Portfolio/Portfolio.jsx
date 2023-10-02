import React, { useEffect } from "react";
import "./Portfolio.css";

import Aos from "aos";
import "aos/dist/aos.css";

//imported assets

import icon1 from "/assets/safety.png";
import icon2 from "/assets/destination.png";
import icon3 from "/assets/chat.png";
import image from "/assets/image9.png";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why You Should Choose Us?</h3>
            <p data-aos="fade-up">
              We believe in crafting experiences that are as unique as you are.{" "}
              <strong>Beleive in Our Hospitality.</strong>
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon1} alt="safety icon" data-aos="fade-up" />
              </div>

              <div className="infor">
                <h4 data-aos="fade-up">Safety and Support</h4>
                <p data-aos="fade-up">
                  Travel with peace of mind knowing that our dedicated support
                  team is available around the clock. Whether you encounter a
                  hiccup or simply need advice, we're just a call or message
                  away.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="destination icon" data-aos="fade-up" />
              </div>

              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  From bustling metropolises to tranquil retreats, our travel
                  portfolio spans the globe, encompassing a diverse range of
                  destinations to suit every traveler's taste and wanderlust.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt="online chat icon" data-aos="fade-up" />
              </div>

              <div className="infor">
                <h4>24/7 Customer Care</h4>
                <p>
                  Stay connected, no matter where your adventure takes you. Our
                  dedicated online support ensures you have instant access to
                  assistance, recommendations, and local insights, ensuring a
                  seamless and enriching travel experience from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent" data-aos="fade-down">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
