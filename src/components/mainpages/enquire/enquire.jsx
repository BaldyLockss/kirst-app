import { useNavigate, Link } from "react-router-dom";
import "./enquire.css";

const Enquire = () => {
  const navigate = useNavigate();

  return (
    <div className="enquire-container">
      <h2>Order enquiry form.</h2>
      <div className="enquire-form">
        <form name="contact" method="post" onSubmit="submit">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" />
          <input
            type="number"
            name="number"
            inputMode="numeric"
            placeholder="Number"
          />
          <input type="email" name="email" placeholder="Email" />
          <input
            type="text"
            name="date"
            placeholder="Rough date required - e.g. 'last week in july'"
            // value={cakeForm.date}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="What would you like?"
          ></textarea>
          <input type="text" name="size" placeholder="Size" />
          <button type="submit">Enquire</button>
        </form>
      </div>
      <div className="enquire-btns">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default Enquire;
