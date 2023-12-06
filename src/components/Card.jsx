import React, { useState } from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils";
import Swal from "sweetalert2";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => {
    Swal.fire({
      title: "Are you sure 🤔",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        action((notes) => notes.filter((note) => note.id !== item));
        Swal.fire({
          title: "Deleted 😔",
          text: "Your data has been deleted",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled 😃",
          text: "Your data is safe",
          icon: "info",
        });
      }
    });
  };

  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
    Swal.fire({
      icon: "success",
      title: "Your data has been archived",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const [showFullText, setShowFullText] = useState(false);
  const truncatedBody = showFullText
    ? body
    : body.length > 100
    ? `${body.slice(0, 100)} ... `
    : body;

  return (
    <div className="note-item">
      <div className="note-item__content">
        <article id={id}>
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p
            className={`note-item__body ${
              showFullText ? "full-text" : "truncated-text"
            }`}
            onClick={() => setShowFullText(!showFullText)}
          >
            {truncatedBody}
            {!showFullText && body.length > 100 && (
              <span className="see-more-text">see more</span>
            )}
          </p>
        </article>
      </div>
      <div className="note-item__action">
        <Button
          eventHandler={() => deleteNote(id)}
          label="Delete ❎"
          className="note-item__delete-button"
        />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? "Unarchived ✅" : "Archive ✅"}
          className="note-item__archive-button"
        />
      </div>
    </div>
  );
};

export default Card;