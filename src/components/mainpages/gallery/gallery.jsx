import "./gallery.css";
import { Link, useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-container">
      <div className="gallery-container">
        <div className="occasional-cakes">
          <h2>Occational cakes</h2>
          <Link to="/cakes">
            <img
              className="image"
              src={require(`../../../images/gallerypage/venomremoved.png`)}
              alt="venom themed cake"
            />
          </Link>
        </div>
        <div className="cheesecakes">
          <h2>Cheesecakes</h2>
          <Link className="cheesecakes media">
            <img
              className="image"
              src={require(`../../../images/gallerypage/CKremoved.png`)}
              alt="cheesecake"
            />
          </Link>
        </div>
        <div className="basic-cakes">
          <h2>Basic cakes</h2>
          <Link className="basic-cakes media">
            <img
              className="image"
              src={require(`../../../images/gallerypage/basiccake.png`)}
              alt="basic cake"
            />
          </Link>
        </div>
        <div className="other">
          <h2>Other items</h2>
          <Link className="other media">
            <img
              className="image"
              src={require(`../../../images/gallerypage/cupcakes.png`)}
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
