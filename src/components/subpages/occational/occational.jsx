import "./occational.css";
import { useNavigate, Link } from "react-router-dom";
import { occationCakes } from "../../../context/data";

const Occational = () => {
  const navigate = useNavigate();
  return (
    <div className="occational-container">
      <div className="occational-image-container">
        {occationCakes.map((cake, i) => {
          return (
            <img
              className="occational-img"
              src={require(`../../../images/occationalcakes/${cake.src}`)}
              alt={cake.alt}
              key={i}
            />
          );
        })}
      </div>
      <div className="occational-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Occational;
