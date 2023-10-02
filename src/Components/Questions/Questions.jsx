import React, { useState, useEffect } from "react";
import "./Questions.css";
import Accordion from "./Accordion";

import Aos from "aos";
import "aos/dist/aos.css";

const Questions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [active, setActive] = useState(
    "What destinations do you offer tours to?"
  );
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">
          Frequently Asked Questions <span>(FAQ's)</span>
        </h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion
            title="What destinations do you offer tours to?"
            desc="We offer tours to a diverse range of destinations worldwide. From
        vibrant cities to serene natural landscapes, our portfolio caters to a
        wide range of traveler interests. Explore our website to discover all
        the exciting places we have to offer."
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="Can I customize an itinerary to suit my preferences?"
            desc="Absolutely! We believe in creating personalized experiences. Contact our team and let us know your specific preferences, and we'll work together to tailor an itinerary that matches your interests and desires."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What is included in the tour package?"
            desc="Our tour packages typically include accommodations, transportation, guided tours, and specified activities as outlined in the itinerary. Please refer to the specific tour details for a comprehensive list of inclusions."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How do I make a payment for my booking?"
            desc="You can make a payment securely through our website using major credit cards. We also accept bank transfers. Details for payment methods will be provided during the booking process."
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">Do You Have any Specific Queries?</h4>
            <p data-aos="fade-up">
              Please fill up the form below and our dedicated team will get in
              touch with you <strong>ASAP</strong>.
            </p>
          </div>

          <div className="formContent grid">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              data-aos="fade-up"
            />
            <textarea
              placeholder="Enter your Queries Here."
              data-aos="fade-up"
            ></textarea>
            <button className="btn" data-aos="fade-up">
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
