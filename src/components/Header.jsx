import React from "react";
import Input from "./Input";

const Header = ({ search, updateQuery }) => {
  return (
    <div className="note-app__header">
      <h1 className="title">Notes App 📱</h1>
      <Input
        value={search}
        onChange={updateQuery}
        type="search"
        id="search_note"
        name="search_note"
        placeholder="Find notes..."
      />
    </div>
  );
};

export default Header;