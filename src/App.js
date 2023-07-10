import { Routes, Route } from "react-router-dom";
//main app imports
import Navbar from "./components/mainpages/navbar/navbar";
import HomePage from "./components/mainpages/home/homePage";
import About from "./components/mainpages/about/about";
import Gallery from "./components/mainpages/gallery/gallery";
import Prices from "./components/mainpages/prices/prices";
import Enquire from "./components/mainpages/enquire/enquire";
// subpage imports
import Occasion from "./components/subpages/occasion/occasion";
import Cheesecake from "./components/subpages/cheesecakes/cheesecake";
import Basic from "./components/subpages/basic/basic";
import Other from "./components/subpages/other/other";

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
          <Route path="/prices" element={<Prices />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/occasional" element={<Occasion />} />
          <Route path="/cheesecakes" element={<Cheesecake />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
