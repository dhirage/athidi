import React, { useEffect } from "react";
import "./Subscribe.css";

import Aos from "aos";
import "aos/dist/aos.css";

//import images
import image from "/assets/image10.png";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image} alt="Div Image" data-aos="fade-down" />

        <div className="textDiv">
          <h4 data-aos="fade-up">Best way to Start your Journey! </h4>

          <p data-aos="fade-up">
            We offer a range of accommodation options, from comfortable hotels
            to boutique guesthouses and unique lodgings, depending on the
            destination and tour package.
            <br />
            Specific details will be provided in the tour itinerary.
          </p>
          <button className="btn" data-aos="fade-up">
            {" "}
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
