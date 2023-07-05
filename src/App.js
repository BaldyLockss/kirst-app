import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/home/homePage";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Cakes from "./components/cakes/cakes";
import Shop from "./components/shop/shop";
import Enquire from "./components/enquire/enquire";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-nav">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/cakes" element={<Cakes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
