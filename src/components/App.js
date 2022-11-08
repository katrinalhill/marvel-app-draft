import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./HomePage";
import MainSearch from "./MainSearch";
import EventSearch from './EventSearch';
import SingleProfile from "./SingleProfile";
import SingleEvent from './SingleEvent';

import CharacterContext from "./CharacterContext";
import EventContext from "./EventContext"

import './styling/app.css'


function App() {
  const[characterCon, setCharacterCon] = useState([]);
  const value = {characterCon, setCharacterCon};
  const[eventCon, setEventCon] = useState([]);
  const value2 = {eventCon, setEventCon};

  return (
    <>
    <Router>
    <CharacterContext.Provider value={value}>
      <EventContext.Provider value={value2}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/characters" element={<MainSearch />} />
        <Route path="/characters/:characterid" element={<SingleProfile character={characterCon}/>} />
        <Route path="/events" element={<EventSearch />} />
        <Route path="/events/:eventid" element={<SingleEvent event={eventCon}/>} />
      </Routes>
      </EventContext.Provider>
      </CharacterContext.Provider>
    </Router>
    </>
  );
}

export default App;
