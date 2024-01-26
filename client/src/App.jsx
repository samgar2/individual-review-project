import "./App.css";
import "./index.css";
import React from "react";
import Home from "./components/Home";
import Characters from "./components/Characters";
import SingleCharacter from "./components/SingleCharacter";
import Books from "./components/Books";
import Outfits from "./components/Outfits";
import Navigations from "./components/Navigations";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigations />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:characterId" element={<SingleCharacter />} />
          <Route path="/books" element={<Books />} />
          <Route path="/outfits" element={<Outfits />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
