import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      {/* <h1>Occasion cakes</h1> */}
      <img
        className="o-cakes"
        src={require(`../../images/svgs/venom.jpg`)}
        alt="venom themed cake"
      />

      {/* <h1>Cheesecakes</h1> */}
      <img
        className="cheesecakes"
        src={require(`../../images/svgs/cheesecake10.jpg`)}
        alt="cheesecake"
      />

      {/* <h1>Basic cakes</h1> */}
      <img
        className="b-cakes"
        src={require(`../../images/svgs/basicCake.jpg`)}
        alt="basic cake"
      />
      {/* <h1>Other items</h1> */}
      <img
        className="other"
        src={require(`../../images/svgs/traybake2.jpg`)}
        alt="other items"
      />
    </div>
  );
};

export default Gallery;
