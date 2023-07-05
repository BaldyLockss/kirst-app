import { useNavigate, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./about.css";

const About = () => {
  const navigate = useNavigate();
  return (
    // <div className="about-container">
    <div className="about-info">
      <h2>About me.</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, pariatur
        rem qui eaque voluptate tempora fuga accusamus quasi adipisci
        voluptates. Repellat ab distinctio alias esse eveniet libero molestias
      </p>
      <div className="about-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
    // </div>
  );
};

export default About;
