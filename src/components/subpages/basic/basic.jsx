import "./basic.css";
// import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { slides } from "../../../context/data";

const Basic = () => {
  const navigate = useNavigate();
  return (
    <div className="basic-container">
      <div className="basic-image-container">
        {slides.map((slide, i) => {
          return (
            <img
              className="basic-img"
              src={require(`../../../images/cakepage/${slide.src}`)}
              alt={slide.alt}
              key={i}
            />
          );
        })}
      </div>
      <div className="basic-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Basic;
