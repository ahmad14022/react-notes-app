import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Input from "./Input";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();
    const randomId = uuidv4();

    updateNotes((notes) => [
      ...notes,
      {
        id: randomId,
        title,
        body: note,
        archived: false,
        createdAt: timestamp,
      },
    ]);

    Swal.fire({
      icon: "success",
      title: "Your data has been added",
      showConfirmButton: false,
      timer: 1700,
    });

    setTitle("");
    setNote("");
  };

  return (
    <div className="note-input">
      <h2 className="">Create your notes 📝</h2>
      <form onSubmit={createNote}>
        <p className="note-input__title__char-limit">
          Remaining characters: <span>{50 - title.length}</span>
        </p>

        <Input
          value={title}
          onChange={setTitle}
          type="text"
          placeholder="Title your notes"
          id="title"
          name="title"
          required
        />

        <Input
          value={note}
          onChange={setNote}
          type="textarea"
          placeholder="Today, I will ..."
          required
        />
        <button type="submit" id="submit_form" name="submit_form">
          Create 🗒️
        </button>
      </form>
    </div>
  );
};

export default FormInput;