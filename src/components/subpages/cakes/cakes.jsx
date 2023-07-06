import "./cakes.css";
// import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { slides } from "../../../context/data";

const Cakes = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="image-container">
        {slides.map((slide, i) => {
          return (
            <img
              className="img"
              src={require(`../../../images/cakepage/${slide.src}`)}
              alt={slide.alt}
              key={i}
            />
          );
        })}
      </div>
      <div className="cake-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Cakes;
