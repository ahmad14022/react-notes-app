import React from "react";
import Card from "./Card";

const Notes = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2>{label}</h2>
      {notes.length === 0 ? (
        <p className="blank">Note not found</p>
      ) : (
        <div className="notes-list">
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Notes;