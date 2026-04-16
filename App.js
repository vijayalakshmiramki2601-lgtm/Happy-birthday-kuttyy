import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LoveLetter from "./components/LoveLetter";
import Memories from "./components/Memories";
import Songs from "./components/Songs";
import Final from "./components/Final";
import Videos from "./components/Videos";

import "./App.css";
function Hearts() {
  return (
    <>
      <div className="heart" style={{ left: "10%" }}>💙</div>
      <div className="heart" style={{ left: "30%" }}>💖</div>
      <div className="heart" style={{ left: "50%" }}>💙</div>
      <div className="heart" style={{ left: "70%" }}>💖</div>
      <div className="heart" style={{ left: "90%" }}>💙</div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/final" element={<Final />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;