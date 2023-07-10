import "./basic.css";
import { useNavigate, Link } from "react-router-dom";
import { basicCakes } from "../../../context/data";

const Basic = () => {
  const navigate = useNavigate();
  return (
    <div className="basic-container">
      <div className="basic-image-container">
        {basicCakes.map((basic, i) => {
          return (
            <img
              className="basic-img"
              src={require(`../../../images/basiccakes/${basic.src}`)}
              alt={basic.alt}
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
