import { Routes, Route } from "react-router-dom";
import Navbar from "./components/mainpages/navbar/navbar";
import HomePage from "./components/mainpages/home/homePage";
import About from "./components/mainpages/about/about";
import Gallery from "./components/mainpages/gallery/gallery";
import Cakes from "././components/subpages/cakes/cakes";
import Shop from "./components/mainpages/shop/shop";
import Enquire from "./components/mainpages/enquire/enquire";

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
        {/* <Cakes /> */}
      </main>
    </div>
  );
}

export default App;
