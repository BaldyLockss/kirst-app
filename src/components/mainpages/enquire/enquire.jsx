import { useNavigate, Link } from "react-router-dom";
import "./enquire.css";
import { useState } from "react";

const Enquire = () => {
  const navigate = useNavigate();

  const [cakeForm, setCakeForm] = useState({
    name: "",
    number: "",
    email: "",
    date: "",
    message: "",
    size: "",
  });

  const inputHandler = (e) => {
    setCakeForm({ ...cakeForm, [e.target.name]: e.target.value });
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(cakeForm);
  //   alert(
  //     `your name is ${cakeForm.name}, number: ${cakeForm.number}, email: ${cakeForm.email}, required date is ${cakeForm.date} you would like:${cakeForm.message} the size you would like is;${cakeForm.size}`
  //   );
  //   setCakeForm({
  //     name: "",
  //     number: "",
  //     email: "",
  //     date: "",
  //     message: "",
  //     size: "",
  //   });
  // };

  return (
    <div className="enquire-container">
      <h2>Order enquiry form.</h2>
      <div className="enquire-form">
        <form name="contact" method="post">
          <input
            onChange={(e) => inputHandler(e)}
            type="text"
            name="name"
            placeholder="Name"
            value={cakeForm.name}
          />
          <input
            onChange={(e) => inputHandler(e)}
            type="number"
            name="number"
            inputMode="numeric"
            placeholder="Number"
            value={cakeForm.number}
          />
          <input
            onChange={(e) => inputHandler(e)}
            type="email"
            name="email"
            placeholder="Email"
            value={cakeForm.email}
          />
          <input
            onChange={(e) => inputHandler(e)}
            type="text"
            name="date"
            placeholder="Rough date required - e.g. 'last week in july'"
            value={cakeForm.date}
          />
          <textarea
            onChange={(e) => inputHandler(e)}
            name="message"
            cols="30"
            rows="10"
            placeholder="What would you like?"
            value={cakeForm.message}
          ></textarea>
          <input
            onChange={(e) => inputHandler(e)}
            type="text"
            name="size"
            placeholder="Size"
            value={cakeForm.size}
          />
          <button type="submit">Submit</button>
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
