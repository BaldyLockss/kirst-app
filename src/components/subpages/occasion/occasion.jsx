import "./occasion.css";
import { useNavigate, Link } from "react-router-dom";
import { occasionCakes } from "../../../context/data";

const Occasion = () => {
  const navigate = useNavigate();
  return (
    <div className="occasion-container">
      <div className="occasion-image-container">
        {occasionCakes.map((cake, i) => {
          return (
            <img
              className="occasion-img"
              src={require(`../../../images/occasioncakes/${cake.src}`)}
              alt={cake.alt}
              key={i}
            />
          );
        })}
      </div>
      <div className="occasion-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Occasion;
