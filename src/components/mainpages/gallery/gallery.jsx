import "./gallery.css";
import { Link, useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <div className="gallery-container">
        <div className="occasional-cakes">
          <h2>Occasion cakes</h2>
          <Link to="/occasional">
            <img
              className="image"
              src={require(`../../../images/gallerypage/venomremoved.png`)}
              alt="venom themed cake"
            />
          </Link>
        </div>
        <div className="cheesecakes">
          <h2>Cheesecakes</h2>
          <Link to="/cheesecakes">
            <img
              className="image"
              src={require(`../../../images/gallerypage/cheesecake.png`)}
              alt="cheesecake"
            />
          </Link>
        </div>
        <div className="basic-cakes">
          <h2>Basic cakes</h2>
          <Link to="/basic">
            <img
              className="image"
              src={require(`../../../images/gallerypage/basic cake.png`)}
              alt="basic cake"
            />
          </Link>
        </div>
        <div className="other">
          <h2>Other items</h2>
          <Link to="/other">
            <img
              className="image"
              src={require(`../../../images/gallerypage/other.png`)}
              alt="other items"
            />
          </Link>
        </div>
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
