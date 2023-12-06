import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState(getInitialData());

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    setNotes(filteredNotes);
  }, [query]);

  return (
    <>
      <Header search={query} updateQuery={updateQuery} />
      <Body notes={notes} updateNotes={setNotes} />
    </>
  );
}

export default App;