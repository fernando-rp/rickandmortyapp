import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./layouts/home"
import Characters from "./layouts/characters"
import Character from "./layouts/character"
import Episodes from "./layouts/episodes"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character" element={<Character />} />
        <Route path="/episodes" element={<Episodes />} />
        {/* <Route path='/404' element={<NotFound />} />
        <Route
          path="*"
          element={<Navigate to="/404" />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
