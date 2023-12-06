import React from "react";

const Input = (attributes) => {
  const changeHandler = (e) => {
    if (attributes.name === "title") {
      const currentText = e.target.value;
      attributes.onChange((oldText) =>
        currentText.length <= 50 ? currentText : oldText
      );
    } else {
      attributes.onChange(e.target.value);
    }
  };

  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea
          {...attributes}
          className="note-input__body"
          value={attributes.value}
          spellCheck={false}
          onChange={changeHandler}
        />
      ) : (
        <div className="note-search">
          <input
            {...attributes}
            spellCheck={false}
            value={attributes.value}
            onChange={changeHandler}
          />
        </div>
      )}
    </>
  );
};

export default Input;