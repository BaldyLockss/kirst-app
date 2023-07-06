import "./cheesecake.css";
// import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { slides } from "../../../context/data";

const Cheesecake = () => {
  const navigate = useNavigate();
  return (
    <div className="cheesecake-container">
      <div className="cheesecake-image-container">
        {slides.map((slide, i) => {
          return (
            <img
              className="cheesecake-img"
              src={require(`../../../images/cakepage/${slide.src}`)}
              alt={slide.alt}
              key={i}
            />
          );
        })}
      </div>
      <div className="cheesecake-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Cheesecake;
