import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import MainSearch from "./MainSearch";
import EventSearch from './EventSearch';
import SingleProfile from "./SingleProfile";
import SingleEvent from './SingleEvent';

import './styling/app.css'


function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/characters" element={<MainSearch />} />
        <Route path="/characters/:characterid" element={<SingleProfile />} />
        <Route path="/events" element={<EventSearch />} />
        <Route path="/events/:eventid" element={<SingleEvent />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
