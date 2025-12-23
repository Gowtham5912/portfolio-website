import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleReadMore = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Expertise</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>

            {activeIndex === index && (
              <p className="services-full">{service.s_full_desc}</p>
            )}

            <button
              className="services-readmore"
              onClick={() => toggleReadMore(index)}
            >
              <span>
                {activeIndex === index ? "Show Less" : "Read More"}
              </span>
              <img src={arrow_icon} alt="arrow" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
