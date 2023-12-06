import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Notes from "./Notes";

const Body = ({ notes, updateNotes }) => {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <div className="note-app__body">
      <FormInput updateNotes={updateNotes} />
      <Notes label='Active Notes' notes={activeNotes} setNotes={updateNotes} />
      <Notes label='Archived Notes' notes={archivedNotes} setNotes={updateNotes} />
    </div>
  );
};

export default Body;
