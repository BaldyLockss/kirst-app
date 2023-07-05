import "./gallery.css";
import { Link, useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <div className="gallery-container">
        <div className="occasional-cakes media">
          <Link to="./cakes">
            <img
              src={require(`../../images/svgs/venom.jpg`)}
              alt="venom themed cake"
            />
          </Link>
        </div>

        <Link className="cheesecakes media">
          <img
            src={require(`../../images/svgs/cheesecake10.jpg`)}
            alt="cheesecake"
          />
        </Link>

        <Link className="basic-cakes media">
          <img
            src={require(`../../images/svgs/basicCake.jpg`)}
            alt="basic cake"
          />
        </Link>

        <Link className="other media">
          <img
            src={require(`../../images/svgs/traybake2.jpg`)}
            alt="other items"
          />
        </Link>
      </div>
      <div className="gallery-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Gallery;
