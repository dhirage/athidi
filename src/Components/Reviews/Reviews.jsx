import React, { useEffect } from "react";
import "./Reviews.css";

import Aos from "aos";
import "aos/dist/aos.css";

//imported icons
import { AiFillStar } from "react-icons/ai";

//imported images

import image1 from "/assets/image10.jpg";
import image2 from "/assets/image11.jpg";
import image3 from "/assets/image12.jpg";
import image4 from "/assets/image13.jpg";
import image5 from "/assets/image14.jpg";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos="fade-up">
            I recently had the pleasure of booking a trip with Enchant Nepal and
            it was nothing short of exceptional. From the moment I inquired
            about their services to the end of my journey, every interaction was
            marked by professionalism, expertise, and a genuine passion for
            travel.
          </p>

          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={image1} alt="client image1" data-aos="fade-up" />
            <img src={image2} alt="client image2" data-aos="fade-up" />
            <img src={image3} alt="client image3" data-aos="fade-up" />
            <img src={image4} alt="client image4" data-aos="fade-up" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div Image" data-aos="fade-Down" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
