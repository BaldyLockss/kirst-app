import "./cakes.css";
import { Link, useNavigate } from "react-router-dom";
// import HomePage from "../home/homePage";

const Cakes = () => {
  const navigate = useNavigate();
  return (
    <div className="cakes-container">
      <div className="slider-container">
        <h1>hello</h1>
      </div>
      <div className="cake-btns">
        <Link to="../gallery">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Cakes;
