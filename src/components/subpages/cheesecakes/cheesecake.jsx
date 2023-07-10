import "./cheesecake.css";
import { useNavigate, Link } from "react-router-dom";
import { cheesecakes } from "../../../context/data";

const Cheesecake = () => {
  const navigate = useNavigate();
  return (
    <div className="cheesecake-container">
      <div className="cheesecake-image-container">
        {cheesecakes.map((cCake, i) => {
          return (
            <img
              className="cheesecake-img"
              src={require(`../../../images/cheesecakes/${cCake.src}`)}
              alt={cCake.alt}
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
