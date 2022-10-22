import React from "react";
import "./slider.css";
import { useInView } from "react-intersection-observer";

export default function Slider({ imageSrc, title, subtitle, flipped }) {

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContext = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc}  className="slider-img" />
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p className="slider-subtitle">{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p className="slider-subtitle">{subtitle}</p>
          </div>
          <img src={imageSrc}  className="slider-img" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
       {renderContext()}
    </div>
  );
}
