import "./other.css";
// import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { slides } from "../../../context/data";

const Other = () => {
  const navigate = useNavigate();
  return (
    <div className="other-container">
      <div className="other-image-container">
        {slides.map((slide, i) => {
          return (
            <img
              className="other-img"
              src={require(`../../../images/cakepage/${slide.src}`)}
              alt={slide.alt}
              key={i}
            />
          );
        })}
      </div>
      <div className="other-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Other;
