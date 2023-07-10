import "./other.css";
import { useNavigate, Link } from "react-router-dom";
import { others } from "../../../context/data";

const Other = () => {
  const navigate = useNavigate();
  return (
    <div className="other-container">
      <div className="other-image-container">
        {others.map((other, i) => {
          return (
            <img
              className="other-img"
              src={require(`../../../images/otherItems/${other.src}`)}
              alt={other.alt}
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
