import { useNavigate, Link } from "react-router-dom";
import "./prices.css";

const Prices = () => {
  const navigate = useNavigate();
  return (
    <div className="prices-container">
      <div className="prices-items">
        <ul>
          <h1>Price List</h1>
          <h2>Occasional cakes - priced to order</h2>
          <li>Starting - £20</li>
          <li>Fondant - £50</li>
          <h2>Cupcakes</h2>
          <li>Box of 4 - £10</li>
          <li>Box of 6 - £15</li>
          <li>Box of 12 - £25</li>
          <h2>Chocolate tiffin</h2>
          <li>Regular - £15</li>
          <li>Delux - £20</li>
          <h2>Cheesecakes</h2>
          <li>Standard - £15</li>
          <li>2 standard - £25</li>
          <h2>Brownie trays</h2>
          <li>Regular - £15</li>
          <li>Stuffed - £20</li>
          <br />
        </ul>
        <p>* prices may vary dependant on ingredient</p>
        <br />

        <div className="prices-btns">
          <Link to="/">
            <button className="btn1">Home</button>
          </Link>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Prices;
